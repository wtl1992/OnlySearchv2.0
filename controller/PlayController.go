package controller

import (
	"github.com/go-redis/redis/v8"
	"github.com/go-xorm/xorm"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/mvc"
	"github.com/kataras/iris/v12/sessions"
)

type PlayController struct {
	Context iris.Context
	Session sessions.Session
	Engine * xorm.Engine
	Redis * redis.Client
}


func (pc * PlayController) BeforeActivation(beforeActivation mvc.BeforeActivation){
	beforeActivation.Handle("GET","playMovieWithThreePart","PlayMovieWithThreePart")
}

func (pc * PlayController) PlayMovieWithThreePart() mvc.Result{
	url := pc.Context.URLParam("url")
	name := pc.Context.URLParam("name")

	return mvc.View{
		Name:"play/playMovie.html",
		Data:iris.Map{
			"url" : url,
			"name" : name,
		},
	}
}