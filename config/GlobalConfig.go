package config

import (
	"OnlySearchv2.0/controller/errorhandler"
	"OnlySearchv2.0/model"
	jsoniter "github.com/json-iterator/go"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/sessions"
	"os"
)

func GlobalConfig(application * iris.Application){
	session := sessions.New(sessions.Config{
		Cookie: "OnlySearch-Session",
	})

	application.Use(session.Handler())

	application.Logger().SetLevel("debug")

	//异常的统一处理
	application.OnErrorCode(iris.StatusNotFound,errorhandler.StatusNotFoundHandler)
	application.OnErrorCode(iris.StatusInternalServerError,errorhandler.StatusInternalServerErrorHandler)
}

func NewDataSourceAndRedis() *model.Config{
	file, err := os.Open("./config.json")
	if err != nil{
		panic(err.Error())
	}

	decoder := jsoniter.NewDecoder(file)
	var config = new(model.Config)
	err = decoder.Decode(config)
	return config
}
