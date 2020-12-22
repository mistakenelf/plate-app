import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import classnames from 'classnames/bind';

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

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    updateTodoText(todo, inputValue);

    setIsEditing(false);
  };

  return (
    <li class={cx('todo-container')}>
      <div class={cx('text-container')}>
        <button class={cx('complete-button')} onClick={handleComplete}>
          <svg
            fill={todo.completed ? '#10B981' : ''}
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
            <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
          </svg>
        </button>
        {!isEditing ? (
          <button class={cx('todo-text-button')} onClick={handleEdit}>
            <span class={cx('todo-text', { completed: todo.completed })}>
              {todo.text}
            </span>
          </button>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              class={cx('edit-todo-input')}
              type="text"
              value={inputValue}
              onChange={onChange}
              placeholder="Enter an item to add"
            />
          </form>
        )}
      </div>
      <button class={cx('delete-button')} onClick={handleDelete}>
        <svg
          fill="#EF4444"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
        </svg>
      </button>
    </li>
  );
};
