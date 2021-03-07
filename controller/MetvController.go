package controller

import (
	_const "OnlySearchv2.0/const"
	"encoding/json"
	_ "github.com/PuerkitoBio/goquery"
	"github.com/emirpasic/gods/maps/treemap"
	"github.com/go-redis/redis/v8"
	"github.com/go-xorm/xorm"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/mvc"
	"github.com/kataras/iris/v12/sessions"
	"io/ioutil"
	"math"
	"net/http"
	"strconv"
	"strings"
)

type MetvController struct {
	Context iris.Context
	Session sessions.Session
	Engine * xorm.Engine
	Redis * redis.Client
}


func (mc *MetvController) BeforeActivation(beforeActivation mvc.BeforeActivation) {
	beforeActivation.Handle("GET","index","Index")
	/**
	列出目录：综艺、电视剧、电影、少儿、音乐、动漫、纪录片、乐活、新闻、娱乐、教育、游戏、体育、原创
	 */
	beforeActivation.Handle("GET","getCatalogue","GetCatalogue")
	//列出channel的所有选项
	beforeActivation.Handle("GET","getCatalogueByChannelId/{channelId:int}","GetCatalogueByChannelId")
	beforeActivation.Handle("GET","listPcWeb","ListPcWeb")
	//获取tv集数的列表
	beforeActivation.Handle("GET","getTvList/{videoId:string}","GetTvList")
	//获取tv的集数
	beforeActivation.Handle("GET","getTvJNumber/{videoId:string}","GetTvJNumber")}

func (mc * MetvController) Index() mvc.Result{
	return mvc.View{
		Name:"metv/MetvIndex.html",
	}
}

func (mc * MetvController) GetCatalogue() mvc.Result{
	var httpGetUrl = "https://pianku.api.mgtv.com/rider/config/platformChannels/v1?platform=pcweb&_support=10000000"

	response, err := http.Get(httpGetUrl)

	if err != nil{
		panic(err.Error())
	}

	var dataMap = make(map[string]interface{})
	bytes, _ := ioutil.ReadAll(response.Body)
	_ = json.Unmarshal(bytes, &dataMap)

	return mvc.Response{
		Object: iris.Map{
			"catalogue" : dataMap["data"].([]interface{}),
		},
	}
}

func (mc * MetvController) GetCatalogueByChannelId(channelId int) mvc.Result{
	var httpGetUrl = "https://pianku.api.mgtv.com/rider/config/channel/v1?channelId=CHANNEL_ID&platform=pcweb&_support=10000000"
	httpGetUrl = strings.ReplaceAll(httpGetUrl,"CHANNEL_ID",strconv.Itoa(channelId))

	response, err := http.Get(httpGetUrl)
	if err != nil{
		panic(err.Error())
	}

	bytes, _ := ioutil.ReadAll(response.Body)
	var dataMap = make(map[string]interface{})
	_ = json.Unmarshal(bytes, &dataMap)
	return mvc.Response{
		Object:dataMap,
	}
}

func (mc * MetvController) ListPcWeb() mvc.Result{
	platform := mc.Context.URLParam("platform")
	channelId, _ := mc.Context.URLParamInt("channelId")
	pageIndex, _ := mc.Context.URLParamInt("pageIndex")
	pageSize, _ := mc.Context.URLParamInt("pageSize")
	huDong := mc.Context.URLParam("hudong")
	support := mc.Context.URLParam("_support")
	kind := mc.Context.URLParam("kind")
	area := mc.Context.URLParam("area")
	sort := mc.Context.URLParam("sort")
	abroad := mc.Context.URLParam("abroad")
	src := mc.Context.URLParam("src")
	year := mc.Context.URLParam("year")
	edition := mc.Context.URLParam("edition")
	chargeInfo := mc.Context.URLParam("chargeInfo")
	fitAge := mc.Context.URLParam("fitAge")
	musicStyle := mc.Context.URLParam("musicStyle")

	var httpGetUrl = "https://pianku.api.mgtv.com/rider/list/pcweb/v3?platform=PLATFORM&channelId=CHANNEL_ID&pn=PAGE_INDEX&pc=PAGE_SIZE&hudong=HU_DONG&_support=SUPPORT&kind=KIND&area=AREA&sort=SORT&abroad=ABROAD&src=SRC&year=YEAR&edition=EDITION&chargeInfo=CHARGE_INFO&fitAge=FIT_AGE&musicStyle=MUSIC_STYLE"
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "PLATFORM", platform)
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "CHANNEL_ID", strconv.Itoa(channelId))
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "PAGE_INDEX", strconv.Itoa(pageIndex))
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "PAGE_SIZE", strconv.Itoa(pageSize))
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "HU_DONG", huDong)
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "SUPPORT", support)
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "KIND", kind)
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "AREA", area)
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "SORT", sort)
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "ABROAD", abroad)
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "SRC", src)
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "YEAR",year)
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "EDITION",edition)
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "CHARGE_INFO",chargeInfo)
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "FIT_AGE",fitAge)
	httpGetUrl = strings.ReplaceAll(httpGetUrl, "MUSIC_STYLE",musicStyle)

	var httpClient http.Client
	request, _ := http.NewRequest("GET", httpGetUrl, nil)
	request.Header.Set("accept-language","zh-CN,zh;q=0.9")
	response, err := httpClient.Do(request)
	if err != nil{
		panic(err.Error())
	}

	bytes, _ := ioutil.ReadAll(response.Body)
	var dataMap = make(map[string]interface{})
	_ = json.Unmarshal(bytes, &dataMap)

	return mvc.Response{
		Object:dataMap,
	}
}


func (mc * MetvController) GetTvList(videoId string) mvc.Result{
	var httpGetUrl = "https://pcweb.api.mgtv.com/episode/list?_support=10000000&version=5.5.35&video_id=VIDEO_ID&page=PAGE_INDEX&size=PAGE_SIZE"

	var treeMap = treemap.NewWithIntComparator()

	var httpGetUrlFormat = strings.ReplaceAll(httpGetUrl,"VIDEO_ID",videoId)
	httpGetUrlFormat = strings.ReplaceAll(httpGetUrlFormat,"PAGE_INDEX","0")
	httpGetUrlFormat = strings.ReplaceAll(httpGetUrlFormat,"PAGE_SIZE","30")

	response, _ := http.Get(httpGetUrlFormat)
	bytes, _ := ioutil.ReadAll(response.Body)
	var dataMap = make(map[string]interface{})

	_ = json.Unmarshal(bytes, &dataMap)
	count, _ := dataMap["data"].(map[string]interface{})["total"].(float64)

	formatData(dataMap,treeMap)

	var pageCount = int(math.Ceil(count * 1.0 / 30 * 1.0))

	for i:=1;i<pageCount;i++{
		var httpGetUrlFormat = strings.ReplaceAll(httpGetUrl,"VIDEO_ID",videoId)
		httpGetUrlFormat = strings.ReplaceAll(httpGetUrlFormat,"PAGE_INDEX",strconv.Itoa(i))
		httpGetUrlFormat = strings.ReplaceAll(httpGetUrlFormat,"PAGE_SIZE","30")
		response, _ := http.Get(httpGetUrlFormat)
		var bytes, _ = ioutil.ReadAll(response.Body)
		var dataMap = make(map[string]interface{})

		_ = json.Unmarshal(bytes, &dataMap)

		formatData(dataMap,treeMap)
	}

	values := treeMap.Values()
	return mvc.Response{
		Object:values,
	}
}

func (mc * MetvController) GetTvJNumber(videoId string) mvc.Result{
	var httpGetUrl = "https://pcweb.api.mgtv.com/episode/list?_support=10000000&version=5.5.35&video_id=VIDEO_ID&page=PAGE_INDEX&size=PAGE_SIZE"
	var httpGetUrlFormat = strings.ReplaceAll(httpGetUrl,"VIDEO_ID",videoId)
	httpGetUrlFormat = strings.ReplaceAll(httpGetUrlFormat,"PAGE_INDEX","1")
	httpGetUrlFormat = strings.ReplaceAll(httpGetUrlFormat,"PAGE_SIZE","30")
	response, _ := http.Get(httpGetUrlFormat)
	bytes, _ := ioutil.ReadAll(response.Body)
	var dataMap = make(map[string]interface{})

	_ = json.Unmarshal(bytes, &dataMap)
	count, _ := dataMap["data"].(map[string]interface{})["total"].(float64)

	return mvc.Response{
		Object:count,
	}
}


func formatData(dataMap map[string]interface{},treeMap * treemap.Map) {
	var dataMap1 = dataMap["data"].(map[string]interface{})["list"].([]interface{})

	for _,dataJson := range dataMap1{
		var tmpMap = dataJson.(map[string]interface{})
		jiNumber, _ := strconv.Atoi(strings.Split(strings.Split(tmpMap["t4"].(string),"第")[1],"集")[0])

		treeMap.Put(jiNumber,iris.Map{
			"url": _const.METV_URL_HOST + tmpMap["url"].(string),
			"time": tmpMap["time"].(string),
			"currentJiNumber": tmpMap["t4"].(string),
		})
	}
}
