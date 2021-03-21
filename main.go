package main

import (
	"OnlySearchv2.0/config"
	"OnlySearchv2.0/database"
	"OnlySearchv2.0/service"
	"github.com/kataras/iris/v12"
)

func main() {
	application := iris.New()

	config.GlobalConfig(application)
	dataBase, _ := config.DatabaseConfig()

	//全局初始化
	config.AllControllerConfig(application, dataBase.(*database.MySqlDataBase).Engine, nil)

	service.ScheduleAll(application, dataBase.(*database.MySqlDataBase).Engine, nil)

	application.HandleDir("/static", "./static")
	application.RegisterView(iris.HTML("./templates", ".html").Reload(true))

	err := application.Run(iris.TLS(":8080", "cert/1_ljxwtl.cn_bundle.crt", "cert/2_ljxwtl.cn.key"))

	if err != nil {
		panic(err.Error())
	}
}
