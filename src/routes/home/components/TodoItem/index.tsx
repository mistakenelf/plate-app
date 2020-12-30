import React from 'react';
import classnames from 'classnames/bind';
import feather from 'feather-icons';

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
            <div
              dangerouslySetInnerHTML={{
                __html: feather.icons.square.toSvg({
                  'stroke-width': 2,
                  color: theme === 'dark' ? '#fff' : '#333',
                }),
              }}
            />
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: feather.icons['check-square'].toSvg({
                  'stroke-width': 2,
                  color: '#059669',
                }),
              }}
            />
          )}
        </button>
        <span className={cx('todo-text', { completed: todo.completed })}>
          {todo.text}
        </span>
      </div>
      <button className={cx('delete-button')} onClick={handleDelete}>
        <div
          dangerouslySetInnerHTML={{
            __html: feather.icons['trash-2'].toSvg({
              'stroke-width': 2,
              color: '#EF4444',
            }),
          }}
        />
      </button>
    </li>
  );
};
