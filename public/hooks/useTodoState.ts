import { useState } from 'preact/hooks';

import { Todo } from '../models/todo';

export const useTodoState = (initialValue: Todo[]) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    setTodos,
    addTodo: (todoText: Todo) => {
      const currentTodos = [...todos, todoText];
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
