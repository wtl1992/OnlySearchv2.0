package config

import (
	"OnlySearchv2.0/controller"
	"github.com/go-redis/redis/v8"
	"github.com/go-xorm/xorm"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/mvc"
)

func MetvConfig(application *iris.Application,engine * xorm.Engine,redis *redis.Client){
	indexApplication := mvc.New(application.Party("/metv"))
	indexApplication.Register(engine,redis)
	indexApplication.Handle(new(controller.MetvController))
}

func PlayConfig(application *iris.Application,engine * xorm.Engine,redis *redis.Client){
	indexApplication := mvc.New(application.Party("/play"))
	indexApplication.Register(engine,redis)
	indexApplication.Handle(new(controller.PlayController))
}

func TvConfig(application *iris.Application,engine * xorm.Engine,redis *redis.Client){
	indexApplication := mvc.New(application.Party("/tv"))
	indexApplication.Register(engine,redis)
	indexApplication.Handle(new(controller.TvController))
}



