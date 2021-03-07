package errorhandler

import (
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/context"
)

func StatusInternalServerErrorHandler(context context.Context){
	_, err := context.JSON(iris.Map{
		"responseCode": 500,
		"status":       "Status InternalServer Error",
	})
	if err != nil{
		context.Application().Logger().Error(err)
		panic(err)
		return
	}
}
