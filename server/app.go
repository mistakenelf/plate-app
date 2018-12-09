package main

import (
	"github.com/iris-contrib/middleware/cors"
	"github.com/kataras/iris"
)

var page = struct {
	Title string
}{"Welcome"}

// NewApp export the apps routes
func NewApp() *iris.Application {
	app := iris.New()

	crs := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		AllowCredentials: true,
	})

	app.Use(crs)

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
	return app
}
