package baiduyunpan

type AccessTokenUsers struct {
	Id          int    `xorm:"id" json:"id"`
	UserName    string `xorm:"userName" json:"userName"`
	AccessToken string `xorm:"accessToken" json:"accessToken"`
	UpdateTime  string `xorm:"updateTime" json:"updateTime"`
}
