import React from 'react';
import classnames from 'classnames/bind';

import { generateId } from '../../helpers/generateId';
import { useInputState } from '../../hooks/useInputState';
import { useTodoState } from '../../hooks/useTodoState';

import { AddTodoInput } from './components/AddTodoInput';
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';
import { EmptyPlate } from './components/EmptyPlate';
import styles from './style.module.css';

const cx = classnames.bind(styles);

export const Home: React.FC = () => {
  const { inputValue, onChange, reset } = useInputState('');
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoState([]);

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
