package constant

import (
	"github.com/go-redis/redis/v8"
	"github.com/go-xorm/xorm"
	"github.com/kataras/iris/v12"
)

var (
	METV_URL_HOST = "https://www.mgtv.com"

	/**
	ćšć±ćé
	*/
	APPLICATION *iris.Application
	ENGINE      *xorm.Engine
	REDIS       *redis.Client
)

func Init(application *iris.Application, engine *xorm.Engine, redis *redis.Client) {
	APPLICATION = application
	ENGINE = engine
	REDIS = redis
}
