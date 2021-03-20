package config

import (
	"OnlySearchv2.0/constant"
	"OnlySearchv2.0/controller"
	"github.com/go-redis/redis/v8"
	"github.com/go-xorm/xorm"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/mvc"
)

func MetvConfig(application *iris.Application, engine *xorm.Engine, redis *redis.Client) {
	indexApplication := mvc.New(application.Party("/metv"))
	indexApplication.Register(engine, redis)
	indexApplication.Handle(new(controller.MetvController))
}

func PlayConfig(application *iris.Application, engine *xorm.Engine, redis *redis.Client) {
	indexApplication := mvc.New(application.Party("/play"))
	indexApplication.Register(engine, redis)
	indexApplication.Handle(new(controller.PlayController))
}

func TvConfig(application *iris.Application, engine *xorm.Engine, redis *redis.Client) {
	indexApplication := mvc.New(application.Party("/tv"))
	indexApplication.Register(engine, redis)
	indexApplication.Handle(new(controller.TvController))
}

func BaiDuWangPanConfig(application *iris.Application, engine *xorm.Engine, redis *redis.Client) {
	bdypApplication := mvc.New(application.Party("/baiduyunpan"))
	bdypApplication.Register(engine, redis)
	bdypApplication.Handle(new(controller.BaiDuYunPanController))
}

func BaiDuWangPanRedirectPageConfig(application *iris.Application, engine *xorm.Engine, redis *redis.Client) {
	bdypApplication := mvc.New(application.Party("/"))
	bdypApplication.Register(engine, redis)
	bdypApplication.Handle(new(controller.BaiDuYunPanRedirectController))
}

//全局初始化
func AllControllerConfig(application *iris.Application, engine *xorm.Engine, redis *redis.Client) {
	constant.Init(application, engine, redis)
	MetvConfig(application, engine, redis)
	PlayConfig(application, engine, redis)
	TvConfig(application, engine, redis)
	BaiDuWangPanConfig(application, engine, redis)
	BaiDuWangPanRedirectPageConfig(application, engine, redis)
}
