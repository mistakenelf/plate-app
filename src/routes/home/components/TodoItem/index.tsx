import React, { useState } from 'react';
import classnames from 'classnames/bind';
import feather from 'feather-icons';
import { useTranslation } from 'react-i18next';

import { Todo } from '../../../../models/todo';
import { useInputState } from '../../../../hooks/useInputState';
import { useTheme } from '../../../../hooks/useTheme';
import { Input } from '../../../../components/Input';

import styles from './style.module.css';

const cx = classnames.bind(styles);

interface TodoItemProps {
  todo: Todo;
  completeTodo: (todo: Todo) => void;
  deleteTodo: (todoId: string) => void;
  updateTodoText: (todo: Todo, newText: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  completeTodo,
  deleteTodo,
  updateTodoText,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const { inputValue, onChange } = useInputState(todo.text);
  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleComplete = () => {
    completeTodo(todo);
  };

  const cancelEdit = () => {
    updateTodoText(todo, inputValue);

    setIsEditing(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateTodoText(todo, inputValue);

    setIsEditing(false);
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
        {!isEditing ? (
          <button className={cx('todo-text-button')} onClick={handleEdit}>
            <span className={cx('todo-text', { completed: todo.completed })}>
              {todo.text}
            </span>
          </button>
        ) : (
          <form className={cx('edit-form')} onSubmit={handleSubmit}>
            <Input
              type="text"
              value={inputValue}
              onChange={onChange}
              placeholder={t('home.todoInputPlaceholder')}
              inputAdornment={
                inputValue !== '' && (
                  <button
                    className={cx('clear-edit-button')}
                    onClick={cancelEdit}
                    dangerouslySetInnerHTML={{
                      __html: feather.icons.x.toSvg({
                        'stroke-width': 2,
                        color: '#EF4444',
                      }),
                    }}
                  />
                )
              }
            />
          </form>
        )}
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
