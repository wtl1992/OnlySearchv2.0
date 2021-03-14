package main

import (
	"OnlySearchv2.0/config"
	"OnlySearchv2.0/database"
	"github.com/kataras/iris/v12"
)

func main() {
	application := iris.New()

	config.GlobalConfig(application)

	dataBase, _ := config.DatabaseConfig()
	config.MetvConfig(application, dataBase.(*database.MySqlDataBase).Engine, nil)
	config.PlayConfig(application, dataBase.(*database.MySqlDataBase).Engine, nil)
	config.TvConfig(application, dataBase.(*database.MySqlDataBase).Engine, nil)

	application.HandleDir("/static", "./static")
	application.RegisterView(iris.HTML("./templates", ".html").Reload(true))

	err := application.Run(iris.TLS(":8080", "cert/1_ljxwtl.cn_bundle.crt", "cert/2_ljxwtl.cn.key"))

	if err != nil {
		panic(err.Error())
	}
}
