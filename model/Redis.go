package model

type Redis struct{
	NetWork string `json:"net_work"`
	Addr string `json:"addr"`
	Port int `json:"port"`
	Password string `json:"password"`
	Prefix string `json:"prefix"`
}
