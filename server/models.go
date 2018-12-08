package main

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
