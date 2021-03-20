package schedule

import (
	"OnlySearchv2.0/model/metv"
	"encoding/json"
	"github.com/go-redis/redis/v8"
	"github.com/go-xorm/xorm"
	"github.com/kataras/iris/v12"
	"github.com/robfig/cron"
	"io/ioutil"
	"math"
	"net/http"
	"strconv"
	"strings"
)

func MetvSchedule(application *iris.Application, engine *xorm.Engine, redis *redis.Client) {
	cronJob := cron.New()
	spec := "0 0 0 15 * ?"
	//spec := "0 0/1 * * * ?"
	_ = cronJob.AddFunc(spec, func() {
		var channelIds = []int{1, 2, 3, 10, 20, 50, 51, 105, 106, 113, 115, 116, 117, 111}

		defer func() {
			if r := recover(); r != nil {
				application.Logger().Info(r)
			}
		}()

		var httpGetUrl = "https://ljxwtl.cn:8080/metv/listPcWeb?platform=pcweb&channelId=CHANNEL_ID&pageIndex=PAGE_INDEX&pageSize=80&hudong=1&_support=10000000&kind=a1&area=a1&sort=c2&abroad=a1&src=a1&year=a1&edition=a1&chargeInfo=a1&fitAge=a1&musicStyle=a1"

		for _, channelId := range channelIds {
			httpGetUrlFormat := strings.ReplaceAll(httpGetUrl, "CHANNEL_ID", strconv.Itoa(channelId))
			for i := 0; i < math.MaxInt64; i++ {
				var httpGetUrlFormatInner = strings.ReplaceAll(httpGetUrlFormat, "PAGE_INDEX", strconv.Itoa(i))
				application.Logger().Info(httpGetUrlFormatInner)
				response, err := http.Get(httpGetUrlFormatInner)
				if err != nil {
					application.Logger().Error(err)
				}

				bytes, _ := ioutil.ReadAll(response.Body)

				var metvResponse = new(metv.MetvResponse)
				_ = json.Unmarshal(bytes, metvResponse)

				metvs := metvResponse.Data.HitDocs

				if len(metvs) == 0 {
					break
				}

				for i := 0; i < len(metvs); i++ {
					metvs[i].ChannelId = channelId
					application.Logger().Info(metvs[i])
				}

				_, _ = engine.Insert(&metvs)

			}
		}
	})

	cronJob.Start()
}
