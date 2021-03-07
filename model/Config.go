package model

type Config struct {
	AppName string `json:"app_name"`
	Port int `json:"port"`
	Mode string `json:"mode"`
	DataSource DataSource `json:"data_source"`
	Redis Redis `json:"redis"`
}
