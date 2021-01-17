import React from 'react';
import classnames from 'classnames/bind';
import { FiSquare, FiCheckSquare, FiTrash2 } from 'react-icons/fi';

import { Task } from '../../../../models/Task';
import { useTheme } from '../../../../lib/hooks/useTheme';

import styles from './style.module.css';

const cx = classnames.bind(styles);

interface TaskItemProps {
  task: Task;
  completeTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  completeTask,
  deleteTask,
}) => {
  const { theme } = useTheme();

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleComplete = () => {
    completeTask(task);
  };

  return (
    <li className={cx('task-container')}>
      <div className={cx('text-container')}>
        <button className={cx('complete-button')} onClick={handleComplete}>
          {!task.completed ? (
            <FiSquare
              className={cx('task-item-icon')}
              strokeWidth={2}
              color={theme === 'dark' ? '#fff' : '#333'}
            />
          ) : (
            <FiCheckSquare
              className={cx('task-item-icon')}
              strokeWidth={2}
              color="#059699"
            />
          )}
        </button>
        <span className={cx('task-text', { completed: task.completed })}>
          {task.text}
        </span>
      </div>
      <button className={cx('delete-button')} onClick={handleDelete}>
        <FiTrash2
          className={cx('task-item-icon')}
          strokeWidth={2}
          color="#ef4444"
        />
      </button>
    </li>
  );
};
