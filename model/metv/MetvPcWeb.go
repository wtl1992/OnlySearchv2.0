package metv

type MetvPcWeb struct {
	Platform   string `json:"platform"`
	ChannelId  int    `json:"channelId"`
	PageIndex  int    `json:"pageIndex"`
	PageSize   int    `json:"pageSize"`
	HuDong     string `json:"huDong"`
	Support    string `json:"support"`
	Kind       string `json:"kind"`
	Area       string `json:"area"`
	Sort       string `json:"sort"`
	Abroad     string `json:"abroad"`
	Src        string `json:"src"`
	Year       string `json:"year"`
	Edition    string `json:"edition"`
	ChargeInfo string `json:"chargeInfo"`
	FitAge     string `json:"fitAge"`
	MusicStyle string `json:"musicStyle"`
}
