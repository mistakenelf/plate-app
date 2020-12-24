import React, { useEffect } from 'react';
import classnames from 'classnames/bind';

import { generateId } from '../../helpers/generateId';
import { useInputState } from '../../hooks/useInputState';
import { useTodoState } from '../../hooks/useTodoState';
import { Todo } from '../../models/todo';

import { AddTodoInput } from './components/AddTodoInput';
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';
import { EmptyPlate } from './components/EmptyPlate';
import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Home: React.FC = () => {
  const { inputValue, onChange, reset } = useInputState('');
  const {
    todos,
    addTodo,
    deleteTodo,
    completeTodo,
    updateTodoText,
    setTodos,
  } = useTodoState([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue) {
      addTodo({
        id: generateId(),
        text: inputValue,
        completed: false,
      });

      reset();
    }
  };

  useEffect(() => {
    const todos = localStorage.getItem('todos');

    if (todos) {
      const todosJson: Todo[] = JSON.parse(todos);

      setTodos(todosJson);
    }
  }, [setTodos]);

  return (
    <section>
      <Header />
      <div className={cx('container')}>
        <form className={cx('add-todo-form')} onSubmit={handleSubmit}>
          <AddTodoInput inputValue={inputValue} onChange={onChange} />
        </form>
        {todos.length > 0 ? (
          <ul className={cx('items-container')}>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                updateTodoText={updateTodoText}
              />
            ))}
          </ul>
        ) : (
          <EmptyPlate />
        )}
      </div>
    </section>
  );
};
