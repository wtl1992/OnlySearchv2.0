package baiduyunpan

type DirParam struct {
	//接口鉴权参数
	AccessToken string `json:"access_token"`
	//需要list的目录，以/开头的绝对路径, 默认为/
	Dir string `json:"dir"`
	/**
	排序字段：默认为name
	time表示先按文件类型排序，后按修改时间排序
	name表示先按文件类型排序，后按文件名称排序
	size表示先按文件类型排序， 后按文件大小排序
	*/
	Order string `json:"order"`
	//该KEY存在为降序，否则为升序 （注：排序的对象是当前目录下所有文件，不是当前分页下的文件）
	Desc string `json:"desc"`
	//起始位置，从0开始
	Start int `json:"start"`
	//每页条目数，默认为1000，最大值为10000
	Limit int `json:"limit"`
	//值为web时， 返回dir_empty属性 和 缩略图数据
	Web string `json:"web"`
	//是否只返回文件夹，0 返回所有，1 只返回目录条目，且属性只返回path字段。
	Folder int `json:"folder"`
	//是否返回 dir_empty 属性，0 不返回，1 返回
	ShowEmpty int `json:"showempty"`
}

type DirParamResponse struct {
	//文件在云端的唯一标识ID
	FsId uint64 `json:"fs_id"`
	//文件的绝对路径
	Path string `json:"path"`
	//文件名称
	ServerFilename string `json:"server_filename"`
	//文件大小，单位B
	Size uint `json:"size"`
	//文件在服务器修改时间
	ServerMtime uint `json:"server_mtime"`
	//文件在服务器创建时间
	ServerCtime uint `json:"server_ctime"`
	//文件在客户端修改时间
	LocalMtime uint `json:"local_mtime"`
	//文件在客户端创建时间
	LocalCtime uint `json:"local_ctime"`
	//是否目录，0 文件、1 目录
	IsDir uint `json:"isdir"`
	//文件类型，1 视频、2 音频、3 图片、4 文档、5 应用、6 其他、7 种子
	Category uint `json:"category"`
	//文件的md5值，只有是文件类型时，该KEY才存在
	Md5 string `json:"md5"`
	//该目录是否存在子目录， 只有请求参数带WEB且该条目为目录时，该KEY才存在， 0为存在， 1为不存在
	DirEmpty int `json:"dir_empty"`
	//只有请求参数带WEB且该条目分类为图片时，该KEY才存在，包含三个尺寸的缩略图URL
	Thumbs []interface{} `json:"thumbs"`
}
