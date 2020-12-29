import { useState, useEffect } from 'react';

import { Todo } from '../models/todo';

export const useTodoState = (initialValue: Todo[]) => {
  const [todos, setTodos] = useState(initialValue);

  useEffect(() => {
    const todos = localStorage.getItem('todos');

    if (todos) {
      const todosJson: Todo[] = JSON.parse(todos);

      setTodos(todosJson);
    }
  }, []);

  return {
    todos,
    setTodos,
    addTodo: (todo: Todo) => {
      const newTodoItem = {
        ...todo,
        text: todo.text.trim(),
      };

      const currentTodos = [...todos, newTodoItem];
      localStorage.setItem('todos', JSON.stringify(currentTodos));

      setTodos(currentTodos);
    },
    deleteTodo: (todoId: string) => {
      const newTodos = todos.filter((todo) => todo.id !== todoId);
      localStorage.setItem('todos', JSON.stringify(newTodos));

      setTodos(newTodos);
    },
    completeTodo: (todo: Todo) => {
      const todoToComplete = todos.indexOf(todo);
      const newTodos = [...todos];
      newTodos[todoToComplete].completed = !todo.completed;

      localStorage.setItem('todos', JSON.stringify(newTodos));

      setTodos(newTodos);
    },
    updateTodoText: (todo: Todo, updatedText: string) => {
      const todoToUpdate = todos.indexOf(todo);
      const newTodos = [...todos];
      newTodos[todoToUpdate].text = updatedText;

      localStorage.setItem('todos', JSON.stringify(newTodos));

      setTodos(newTodos);
    },
  };
};
