package database

import (
	"OnlySearchv2.0/model"
	_ "github.com/go-sql-driver/mysql"
	"github.com/go-xorm/xorm"
	"strconv"
)

type MySqlDataBase struct {
	Engine * xorm.Engine
}

func (mds * MySqlDataBase) NewDataBase(config * model.Config) (DataBase, error){
	engine, err := xorm.NewEngine(config.DataSource.Driver, config.DataSource.UserName + ":" + config.DataSource.Password + "@tcp(" + config.DataSource.Addr + ":" + strconv.Itoa(config.DataSource.Port) + ")/" + config.DataSource.DataBase + "?charset=utf8")
	if err != nil{
		panic(err)
	}

	mds.Engine = engine

	return mds,nil
}


