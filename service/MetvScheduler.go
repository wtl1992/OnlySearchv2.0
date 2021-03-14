package service

import (
	"github.com/robfig/cron"
)

func init() {
	cronJob := cron.New()
	spec := "0 0 0 15 * ?"
	_ = cronJob.AddFunc(spec, func() {

	})

	cronJob.Start()
}
