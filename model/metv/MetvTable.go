package metv

type Metv struct {
	Id         int    `json:"id" xorm:"id"`
	Title      string `json:"title" xorm:"title"`
	Starts     string `json:"subtitle" xorm:"starts"`
	ChannelId  int    `json:"channelId" xorm:"channelId"`
	ClipId     string `json:"clipId" xorm:"clipId"`
	PlayPartId string `json:"playPartId" xorm:"playPartId"`
	Story      string `json:"story" xorm:"story"`
	ImgUrl     string `json:"img" xorm:"imgUrl"`
	UpdateInfo string `json:"updateInfo" xorm:"updateInfo"`
}

type MetvData struct {
	HitDocs []Metv `json:"hitDocs"`
}

type MetvResponse struct {
	Data MetvData `json:"data"`
}
