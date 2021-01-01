import React from 'react';
import classnames from 'classnames/bind';
import { FiSquare, FiCheckSquare, FiTrash2 } from 'react-icons/fi';

import { Todo } from '../../../../models/todo';
import { useTheme } from '../../../../hooks/useTheme';

import styles from './style.module.css';

const cx = classnames.bind(styles);

interface TodoItemProps {
  todo: Todo;
  completeTodo: (todo: Todo) => void;
  deleteTodo: (todoId: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  completeTodo,
  deleteTodo,
}) => {
  const { theme } = useTheme();

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleComplete = () => {
    completeTodo(todo);
  };

  return (
    <li className={cx('todo-container')}>
      <div className={cx('text-container')}>
        <button className={cx('complete-button')} onClick={handleComplete}>
          {!todo.completed ? (
            <FiSquare
              className={cx('todo-item-icon')}
              strokeWidth={2}
              color={theme === 'dark' ? '#fff' : '#333'}
            />
          ) : (
            <FiCheckSquare
              className={cx('todo-item-icon')}
              strokeWidth={2}
              color="#059699"
            />
          )}
        </button>
        <span className={cx('todo-text', { completed: todo.completed })}>
          {todo.text}
        </span>
      </div>
      <button className={cx('delete-button')} onClick={handleDelete}>
        <FiTrash2
          className={cx('todo-item-icon')}
          strokeWidth={2}
          color="#ef4444"
        />
      </button>
    </li>
  );
};
