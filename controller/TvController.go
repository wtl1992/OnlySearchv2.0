package controller

import (
	"github.com/go-redis/redis/v8"
	"github.com/go-xorm/xorm"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/mvc"
	"github.com/kataras/iris/v12/sessions"
)

type TvController struct {
	Context iris.Context
	Session sessions.Session
	Engine * xorm.Engine
	Redis * redis.Client
}


func (tc * TvController) BeforeActivation(beforeActivation mvc.BeforeActivation){
	beforeActivation.Handle("GET","showTv","ShowTv")
}

func (tc * TvController) ShowTv() mvc.Result{
	url := tc.Context.URLParam("url")
	tvName := tc.Context.URLParam("name")
	return mvc.View{
		Name:"tv/playTv.html",
		Data:iris.Map{
			"url":url,
			"name": tvName,
		},
	}
}