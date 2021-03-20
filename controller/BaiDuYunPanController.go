package controller

import (
	"OnlySearchv2.0/model/baiduyunpan"
	"encoding/json"
	"github.com/go-redis/redis/v8"
	"github.com/go-xorm/xorm"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/mvc"
	"github.com/kataras/iris/v12/sessions"
	"io/ioutil"
	"net/http"
)

var (
	ACCESS_TOKEN string
	CLIENT_ID    = "posToOsQ2Dsq3x9DlKLB3zChLAHBV0Gl"
	REDIRECT_URI = "https://localhost:8080/redirectPage"
)

type BaiDuYunPanController struct {
	Context iris.Context
	Session sessions.Session
	Engine  *xorm.Engine
	Redis   *redis.Client
}

func (bypc *BaiDuYunPanController) BeforeActivation(beforeActivation mvc.BeforeActivation) {
	//重定向到https://openapi.baidu.com/oauth/2.0/authorize?response_type=token&client_id=CLIENT_ID&redirect_uri=https://ljxwtl.cn&scope=netdisk
	beforeActivation.Handle("GET", "redirectBaiduYunPanAccessTokenOAuth", "RedirectBaiduYunPanAccessTokenOAuth")
	//登录到系统
	beforeActivation.Handle("GET", "login", "Login")
	//验证用户是否唯一
	beforeActivation.Handle("GET", "verifyUserName/{userName:string}", "VerifyUserName")
	//通过该接口获取用户的基本信息，包括账号，头像地址，会员类型等。
	beforeActivation.Handle("GET", "getUserInfo", "GetUserInfo")
}

func (bypc *BaiDuYunPanController) RedirectBaiduYunPanAccessTokenOAuth() {
	bypc.Context.Redirect("https://openapi.baidu.com/oauth/2.0/authorize?response_type=token&client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URI + "&scope=netdisk")
}

func (bypc *BaiDuYunPanController) VerifyUserName(userName string) mvc.Result {
	count, err := bypc.Engine.Where("userName = ?", userName).Count(&baiduyunpan.AccessTokenUsers{})
	if err != nil {
		panic(err)
	}

	return mvc.Response{
		Object: count,
	}
}

func (bypc *BaiDuYunPanController) GetUserInfo() mvc.Result {
	bypc.Context.Application().Logger().Info(ACCESS_TOKEN)
	var userInfoGetUrl = "https://pan.baidu.com/rest/2.0/xpan/nas?method=uinfo&access_token=" + ACCESS_TOKEN
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
