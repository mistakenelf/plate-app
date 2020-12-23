import { FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import classnames from 'classnames/bind';
import feather from 'feather-icons';

import { generateId } from '../../helpers/generateId';
import { useInputState } from '../../hooks/useInputState';
import { useTodoState } from '../../hooks/useTodoState';
import { Todo } from '../../models/todo';
import { useTheme } from '../../hooks/useTheme';

import { AddTodoInput } from './components/AddTodoInput';
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';
import styles from './style.module.css';

const cx = classnames.bind(styles);

const Home: FunctionComponent = () => {
  const { theme } = useTheme();
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
    <section>
      <Header />
      <div class={cx('container')}>
        <form class={cx('add-todo-form')} onSubmit={handleSubmit}>
          <AddTodoInput inputValue={inputValue} onChange={onChange} />
        </form>
        {todos.length > 0 ? (
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
        ) : (
          <div class={cx('empty-container')}>
            <div
              dangerouslySetInnerHTML={{
                __html: feather.icons['alert-triangle'].toSvg({
                  'stroke-width': 1,
                  color: theme === 'light' ? '#333' : '#fff',
                  height: 100,
                  width: 100,
                }),
              }}
            />
            <p class={cx('empty-text')}>
              Your plate is empty, lets fill it up!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
