package main

import (
	"os"

	"github.com/kataras/iris"
)

func getEnv() string {
	return os.Getenv("APP_ENV")
}

// Todo an todo item
type Todo struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Completed   bool   `json:"completed"`
}

// TodoList an todolist
type TodoList struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Todos       []Todo `json:"todos"`
}

// Token jwt token
type Token struct {
	Token string `json:"token"`
}

var page = struct {
	Title string
}{"Welcome"}

func newApp() *iris.Application {
	app := iris.New()
	app.RegisterView(iris.HTML("build", ".html"))

	app.Get("/api/todo-lists", func(ctx iris.Context) {
		todoLists := []TodoList{
			TodoList{
				ID:          "1",
				Title:       "Title",
				Description: "Description",
				Todos: []Todo{
					Todo{
						ID:          "1",
						Name:        "Name",
						Description: "Description",
						Completed:   false,
					},
				},
			},
			TodoList{
				ID:          "2",
				Title:       "Title",
				Description: "Description",
				Todos: []Todo{
					Todo{
						ID:          "1",
						Name:        "Name",
						Description: "Description",
						Completed:   false,
					},
				},
			},
			TodoList{
				ID:          "3",
				Title:       "Title",
				Description: "Description",
				Todos: []Todo{
					Todo{
						ID:          "1",
						Name:        "Name",
						Description: "Description",
						Completed:   false,
					},
				},
			},
			TodoList{
				ID:          "4",
				Title:       "Title",
				Description: "Description",
				Todos: []Todo{
					Todo{
						ID:          "1",
						Name:        "Name",
						Description: "Description",
						Completed:   false,
					},
				},
			},
			TodoList{
				ID:          "5",
				Title:       "Title",
				Description: "Description",
				Todos: []Todo{
					Todo{
						ID:          "1",
						Name:        "Name",
						Description: "Description",
						Completed:   false,
					},
				},
			},
		}
		ctx.JSON(todoLists)
	})

	app.Get("/api/todo-lists/:id", func(ctx iris.Context) {
		todoList := TodoList{
			ID:          "5",
			Title:       "Title",
			Description: "Description",
			Todos: []Todo{
				Todo{
					ID:          "1",
					Name:        "Name",
					Description: "Description",
					Completed:   false,
				},
			},
		}
		ctx.JSON(todoList)
	})

	app.Post("/api/login", func(ctx iris.Context) {
		token := Token{
			Token: "8LSKD8KJSHDFJKH",
		}
		ctx.JSON(token)
	})

	if getEnv() == "production" {
		app.Get("/", func(ctx iris.Context) {
			ctx.ViewData("Page", page)
			ctx.View("index.html")
		})

		assetHandler := app.StaticHandler("build", false, false)
		app.SPA(assetHandler)
	}

	return app
}

func main() {
	app := newApp()
	app.Run(iris.Addr(":5000"))
}
