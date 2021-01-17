import React from 'react';
import classnames from 'classnames/bind';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { generateId } from '../../lib/helpers/generateId';
import { useTaskState } from '../../lib/hooks/useTaskState';

import { AddTaskInput } from './components/AddTaskInput';
import { TaskItem } from './components/TaskItem';
import { EmptyPlate } from './components/EmptyPlate';
import styles from './style.module.css';

const cx = classnames.bind(styles);

const validationSchema = yup.object().shape({
  task: yup.string().trim().required('Todo item is required'),
});

const PlateDetails: React.FC = () => {
  const { tasks, addTask, deleteTask, completeTask } = useTaskState([]);
  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    validationSchema,
    initialErrors: {
      task: '',
    },
    initialValues: {
      task: '',
    },
    onSubmit: async ({ task }) => {
      addTask({
        id: generateId(),
        text: task,
        completed: false,
      });

      setFieldValue('task', '');
    },
  });

  return (
    <section className={cx('container')}>
      <form className={cx('add-task-form')} onSubmit={handleSubmit}>
        <AddTaskInput inputValue={values.task} onChange={handleChange} />
      </form>
      {tasks.length > 0 ? (
        <ul className={cx('items-container')}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))}
        </ul>
      ) : (
        <EmptyPlate />
      )}
    </section>
  );
};

export default PlateDetails;
