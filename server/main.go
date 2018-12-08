package main

import (
	"github.com/kataras/iris"
)

func main() {
	app := NewApp()
	app.Run(iris.Addr(":5000"))
}
