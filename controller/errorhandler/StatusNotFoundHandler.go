package errorhandler

import (
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/context"
)

func StatusNotFoundHandler(context context.Context) {
	_, err := context.JSON(iris.Map{
		"responseCode": 400,
		"status":       "Status Not Found",
	})
	if err != nil {
		context.Application().Logger().Error(err)
		panic(err)
		return
	}
}