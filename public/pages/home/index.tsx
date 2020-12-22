import { FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import classnames from 'classnames/bind';

import { generateId } from '../../helpers/generateId';
import useInputState from '../../hooks/useInputState';
import useTodoState from '../../hooks/useTodoState';
import { Todo } from '../../models/todo';

import { AddTodoInput } from './components/AddTodoInput';
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';
import styles from './style.module.css';

const cx = classnames.bind(styles);

const Home: FunctionComponent = () => {
  const { inputValue, onChange, reset } = useInputState('');
  const {
    todos,
    addTodo,
    deleteTodo,
    completeTodo,
    updateTodoText,
    setTodos,
  } = useTodoState([]);

  const handleSubmit = (e: Event) => {
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
    <section class={cx('container')}>
      <Header />
      <form class={cx('add-todo-form')} onSubmit={handleSubmit}>
        <AddTodoInput inputValue={inputValue} onChange={onChange} />
      </form>
      <ul class={cx('items-container')}>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            updateTodoText={updateTodoText}
          />
        ))}
      </ul>
    </section>
  );
};

export default Home;
