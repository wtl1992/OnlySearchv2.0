package model

type DataSource struct {
	Driver string `json:"driver"`
	Addr string `json:"addr"`
	Port int `json:"port"`
	UserName string `json:"user_name"`
	Password string `json:"password"`
	DataBase string `json:"data_base"`
}
