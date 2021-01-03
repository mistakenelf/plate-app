import React from 'react';
import classnames from 'classnames/bind';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { generateId } from '../../helpers/generateId';
import { useTodoState } from '../../hooks/useTodoState';

import { AddTodoInput } from './components/AddTodoInput';
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';
import { EmptyPlate } from './components/EmptyPlate';
import styles from './style.module.css';

const cx = classnames.bind(styles);

const validationSchema = yup.object().shape({
  todoItem: yup.string().trim().required('Todo item is required'),
});

export const Home: React.FC = () => {
  const { todos, addTodo, deleteTodo, completeTodo } = useTodoState([]);
  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    validationSchema,
    initialErrors: {
      todoItem: '',
    },
    initialValues: {
      todoItem: '',
    },
    onSubmit: async ({ todoItem }) => {
      addTodo({
        id: generateId(),
        text: todoItem,
        completed: false,
      });

      setFieldValue('todoItem', '');
    },
  });

  return (
    <section>
      <Header />
      <div className={cx('container')}>
        <form className={cx('add-todo-form')} onSubmit={handleSubmit}>
          <AddTodoInput inputValue={values.todoItem} onChange={handleChange} />
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
