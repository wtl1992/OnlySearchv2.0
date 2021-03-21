package controller

import (
	"OnlySearchv2.0/model/baiduyunpan"
	"encoding/base64"
	"encoding/json"
	"github.com/go-redis/redis/v8"
	"github.com/go-xorm/xorm"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/mvc"
	"github.com/kataras/iris/v12/sessions"
	"io/ioutil"
	"log"
	"net/http"
	"reflect"
	"strconv"
	"strings"
	"time"
)

var (
	ACCESS_TOKEN string
	CLIENT_ID    = "posToOsQ2Dsq3x9DlKLB3zChLAHBV0Gl"
	REDIRECT_URI = "https://ljxwtl.cn:8080/redirectPage"
)

type BaiDuYunPanController struct {
	Context iris.Context
	Session *sessions.Session
	Engine  *xorm.Engine
	Redis   *redis.Client
}

func (bypc *BaiDuYunPanController) BeforeActivation(beforeActivation mvc.BeforeActivation) {
	//重定向到https://openapi.baidu.com/oauth/2.0/authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=https://ljxwtl.cn&scope=netdisk
	beforeActivation.Handle("POST", "redirectBaiduYunPanAccessTokenOAuth", "RedirectBaiduYunPanAccessTokenOAuth")
	//登录到系统
	beforeActivation.Handle("GET", "login", "Login")
	//验证用户是否唯一
	beforeActivation.Handle("GET", "verifyUserName/{userName:string}", "VerifyUserName")
	//获取cookie ： userName
	beforeActivation.Handle("GET", "getCookie", "GetCookie")
	//插入到数据库里的userName和access_token
	beforeActivation.Handle("GET", "insertUserAndAccessToken/{accessToken:string}", "InsertUserAndAccessToken")
	//通过该接口获取用户的基本信息，包括账号，头像地址，会员类型等。
	beforeActivation.Handle("GET", "getUserInfo", "GetUserInfo")
	//通过该接口获取用户的网盘空间使用情况
	beforeActivation.Handle("GET", "getNetDiskUsedInfo", "GetNetDiskUsedInfo")
	//通过该接口获取用户网盘中指定目录下的文件列表，返回的文件列表支持排序，分页等。
	beforeActivation.Handle("GET", "getNetDiskDirList", "GetNetDiskDirList")
}

func (bypc *BaiDuYunPanController) RedirectBaiduYunPanAccessTokenOAuth() {
	bypc.Context.Redirect("https://openapi.baidu.com/oauth/2.0/authorize?response_type=token&client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URI + "&scope=netdisk")
}

func (bypc *BaiDuYunPanController) Login() mvc.Result {
	return mvc.View{
		Name: "baiduyunpan/Login.html",
	}
}

func (bypc *BaiDuYunPanController) VerifyUserName(userName string) mvc.Result {
	count, err := bypc.Engine.Where("userName = ?", userName).Count(&baiduyunpan.AccessTokenUsers{})
	if err != nil {
		panic(err)
	}

	if count == 0 {
		nowTime := time.Now()
		location, _ := time.LoadLocation("Asia/Shanghai")
		bypc.Context.SetCookie(&http.Cookie{
			Name:    "userName",
			Value:   base64.StdEncoding.EncodeToString([]byte(userName)),
			Path:    "/baiduyunpan",
			Expires: time.Date(nowTime.Year(), nowTime.Month(), nowTime.Day()+30, nowTime.Hour(), nowTime.Minute(), nowTime.Second(), 0, location),
		})
	}

	return mvc.Response{
		Object: count,
	}
}

func (bypc *BaiDuYunPanController) GetCookie() mvc.Result {
	return mvc.Response{
		Object: getCookieFunc(bypc.Context),
	}
}

func getCookieFunc(Context iris.Context) string {
	cookie := Context.GetCookie("userName")
	var decodedCookie = make([]byte, 1024)
	length, _ := base64.StdEncoding.Decode(decodedCookie, []byte(cookie))
	return string(decodedCookie[:length])
}

func (bypc *BaiDuYunPanController) InsertUserAndAccessToken(accessToken string) mvc.Result {
	var userName = getCookieFunc(bypc.Context)
	nowTime := time.Now()
	location, _ := time.LoadLocation("Asia/Shanghai")
	var accessTokenUser = new(baiduyunpan.AccessTokenUsers)
	accessTokenUser.UserName = userName
	accessTokenUser.AccessToken = accessToken
	accessTokenUser.UpdateTime = nowTime.In(location).Format("2006-01-02 15:04:05")
	count, err := bypc.Engine.Insert(*accessTokenUser)
	if err != nil {
		panic(err)
	}
	return mvc.Response{
		Object: iris.Map{
			"userName":    userName,
			"accessToken": accessToken,
			"count":       count,
			"status":      iris.StatusOK,
		},
	}
}

func commonQueryAccessToken(bypc *BaiDuYunPanController) baiduyunpan.AccessTokenUsers {
	userName := getCookieFunc(bypc.Context)
	var accessTokenUsers baiduyunpan.AccessTokenUsers
	_, err := bypc.Engine.Where("userName = ?", userName).Get(&accessTokenUsers)
	if err != nil {
		panic(err)
	}

	return accessTokenUsers
}

//通过该接口获取用户的基本信息，包括账号，头像地址，会员类型等。
func (bypc *BaiDuYunPanController) GetUserInfo() mvc.Result {
	var accessTokenUsers = commonQueryAccessToken(bypc)
	var userInfoGetUrl = "https://pan.baidu.com/rest/2.0/xpan/nas?method=uinfo&access_token=" + accessTokenUsers.AccessToken
	request, _ := http.NewRequest("GET", userInfoGetUrl, nil)
	request.Header.Set("User-Agent", "pan.baidu.com")
	var httpClient = new(http.Client)

	response, _ := httpClient.Do(request)

	bypc.Context.Application().Logger().Info(response.Header)
	bytes, _ := ioutil.ReadAll(response.Body)
	var dataMap = make(map[string]interface{})

	_ = json.Unmarshal(bytes, &dataMap)
	return mvc.Response{
		Object: dataMap,
	}
}

//通过该接口获取用户的网盘空间使用情况。
func (bypc *BaiDuYunPanController) GetNetDiskUsedInfo() mvc.Result {
	var accessTokenUsers = commonQueryAccessToken(bypc)
	var httpGetUrl = "https://pan.baidu.com/api/quota?access_token=" + accessTokenUsers.AccessToken + "&checkfree=1&checkexpire=1"
	response, err := http.Get(httpGetUrl)
	if err != nil {
		panic(err)
	}

	bytes, _ := ioutil.ReadAll(response.Body)
	var dataMap = make(map[string]interface{})
	_ = json.Unmarshal(bytes, &dataMap)

	return mvc.Response{
		Object: dataMap,
	}
}

//https://localhost:8080/baiduyunpan/getNetDiskDirList?dir=/&order=time&desc=1&start=0&limit=10000&web=web&folder=0&showempty=1
//通过该接口获取用户网盘中指定目录下的文件列表，返回的文件列表支持排序，分页等。
func (bypc *BaiDuYunPanController) GetNetDiskDirList() mvc.Result {
	var accessTokenUsers = commonQueryAccessToken(bypc)
	var dirParam baiduyunpan.DirParam
	err := bypc.Context.ReadQuery(&dirParam)
	if err != nil {
		panic(err)
	}

	dirParam.AccessToken = accessTokenUsers.AccessToken

	keyElem := reflect.TypeOf(&dirParam).Elem()
	valueElem := reflect.ValueOf(&dirParam).Elem()
	var params = make([]string, 0)
	for i := 0; i < keyElem.NumField(); i++ {
		structField := keyElem.Field(i)
		keyName := structField.Tag.Get("json")
		value := valueElem.Field(i)
		switch value.Kind().String() {
		case "int":
			params = append(params, keyName+"="+strconv.FormatInt(value.Int(), 10))
		case "string":
			params = append(params, keyName+"="+value.String())
		}
	}
	var paramsStr = strings.Join(params, "&")
	bypc.Context.Application().Logger().Info(paramsStr)

	var httpGetUrl = "https://pan.baidu.com/rest/2.0/xpan/file?method=list&" + paramsStr
	log.Println(httpGetUrl)
	request, _ := http.NewRequest("GET", httpGetUrl, nil)
	request.Header.Set("User-Agent", "pan.baidu.com")
	var httpClient = new(http.Client)

	response, err := httpClient.Do(request)
	if err != nil {
		panic(err)
	}

	bytes, _ := ioutil.ReadAll(response.Body)
	var dataMap = make(map[string]interface{})
	_ = json.Unmarshal(bytes, &dataMap)

	return mvc.Response{
		Object: dataMap,
	}
}
