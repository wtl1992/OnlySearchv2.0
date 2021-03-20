package controller

import (
	"github.com/go-redis/redis/v8"
	"github.com/go-xorm/xorm"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/mvc"
	"github.com/kataras/iris/v12/sessions"
)

type BaiDuYunPanRedirectController struct {
	Context iris.Context
	Session sessions.Session
	Engine  *xorm.Engine
	Redis   *redis.Client
}

func (bdyprc *BaiDuYunPanRedirectController) BeforeActivation(beforeActivation mvc.BeforeActivation) {
	//获取access_token
	beforeActivation.Handle("GET", "redirectPage", "RedirectPage")
}

func (bdyprc *BaiDuYunPanRedirectController) RedirectPage() {
	bdyprc.Context.Redirect("/static/htmls/baiduyunpan/redirectAccessTokenCollectPage.html")
}
