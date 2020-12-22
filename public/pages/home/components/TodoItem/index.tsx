import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import classnames from 'classnames/bind';
import feather from 'feather-icons';

import { Todo } from '../../../../models/todo';
import useInputState from '../../../../hooks/useInputState';

import styles from './style.module.css';

const cx = classnames.bind(styles);

interface TodoItemProps {
  todo: Todo;
  completeTodo: (todo: Todo) => void;
  deleteTodo: (todoId: string) => void;
  updateTodoText: (todo: Todo, newText: string) => void;
}

export const TodoItem: FunctionComponent<TodoItemProps> = ({
  todo,
  completeTodo,
  deleteTodo,
  updateTodoText,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const { inputValue, onChange } = useInputState(todo.text);

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

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    updateTodoText(todo, inputValue);

    setIsEditing(false);
  };

  return (
    <li class={cx('todo-container')}>
      <div class={cx('text-container')}>
        <button class={cx('complete-button')} onClick={handleComplete}>
          {!todo.completed ? (
            <div
              dangerouslySetInnerHTML={{
                __html: feather.icons.square.toSvg({
                  'stroke-width': 2,
                  color: '#333',
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
          <button class={cx('todo-text-button')} onClick={handleEdit}>
            <span class={cx('todo-text', { completed: todo.completed })}>
              {todo.text}
            </span>
          </button>
        ) : (
          <form onSubmit={handleSubmit}>
            <div class={cx('input-container')}>
              <input
                class={cx('edit-todo-input')}
                type="text"
                value={inputValue}
                onChange={onChange}
                placeholder="Enter an item to add"
              />
              {inputValue !== '' && (
                <button
                  class={cx('clear-edit-button')}
                  onClick={cancelEdit}
                  dangerouslySetInnerHTML={{
                    __html: feather.icons.x.toSvg({
                      'stroke-width': 2,
                      color: '#EF4444',
                    }),
                  }}
                />
              )}
            </div>
          </form>
        )}
      </div>
      <button class={cx('delete-button')} onClick={handleDelete}>
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
