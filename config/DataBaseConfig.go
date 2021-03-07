package config

import "OnlySearchv2.0/database"

func DatabaseConfig() (database.DataBase, error){
	dataSourceAndRedis := NewDataSourceAndRedis()
	var mySqlDataBase = new(database.MySqlDataBase)
	newDataBase, _ := mySqlDataBase.NewDataBase(dataSourceAndRedis)
	return newDataBase,nil
}
