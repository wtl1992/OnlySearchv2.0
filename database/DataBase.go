package database

import "OnlySearchv2.0/model"

type DataBase interface {
	NewDataBase(config * model.Config) (DataBase,error)
}


