import { useState } from 'preact/hooks';

import { Item } from '../models/item';

export default (initialValue: Item[]) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    setTodos,
    addTodo: (todoText: Item) => {
      const currentTodos = [...todos, todoText];
      localStorage.setItem('todos', JSON.stringify(currentTodos));

      setTodos(currentTodos);
    },
    deleteTodo: (todoId: string) => {
      const newTodos = todos.filter((todo) => todo.id !== todoId);
      localStorage.setItem('todos', JSON.stringify(newTodos));

      setTodos(newTodos);
    },
    completeTodo: (todo: Item) => {
      const todoToComplete = todos.indexOf(todo);
      const newTodos = [...todos];
      newTodos[todoToComplete].completed = !todo.completed;

      localStorage.setItem('todos', JSON.stringify(newTodos));

      setTodos(newTodos);
    },
  };
};
