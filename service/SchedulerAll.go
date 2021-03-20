package service

import (
	"OnlySearchv2.0/service/schedule"
	"github.com/go-redis/redis/v8"
	"github.com/go-xorm/xorm"
	"github.com/kataras/iris/v12"
)

//调度
func ScheduleAll(application *iris.Application, engine *xorm.Engine, redis *redis.Client) {
	/**
	metv的调度器
	*/
	go schedule.MetvSchedule(application, engine, nil)
}
