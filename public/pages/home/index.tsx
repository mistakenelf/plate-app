import { FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';

import { generateId } from '../../helpers/generateId';
import useInputState from '../../hooks/useInputState';
import useTodoState from '../../hooks/useTodoState';
import { Item } from '../../models/item';

import styles from './style.module.css';

const Home: FunctionComponent = () => {
  const { value, onChange, reset } = useInputState('');
  const { todos, addTodo, deleteTodo, completeTodo, setTodos } = useTodoState(
    [],
  );

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (value) {
      addTodo({
        id: generateId(),
        text: value,
        completed: false,
      });

      reset();
    }
  };

  useEffect(() => {
    const todos = localStorage.getItem('todos');

    if (todos) {
      const todosJson: Item[] = JSON.parse(todos);

      setTodos(todosJson);
    }
  }, [setTodos]);

  return (
    <section class={styles.container}>
      <div>
        <h1 class={styles.header}>Whats on your Plate?</h1>
        <form onSubmit={handleSubmit}>
          <input
            class={styles['item-input']}
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter an item to add"
          />
        </form>
        <ul class={styles['items-container']}>
          {todos.map((item) => (
            <li class={styles.item}>
              <div class={styles['text-container']}>
                <button
                  class={styles['complete-button']}
                  onClick={() => completeTodo(item)}
                >
                  <svg
                    fill={item.completed ? '#10B981' : ''}
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                    <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                  </svg>
                </button>
                <span
                  style={{
                    textDecoration: item.completed ? 'line-through' : 'normal',
                  }}
                  class={styles['item-text']}
                >
                  {item.text}
                </span>
              </div>
              <button
                class={styles['delete-button']}
                onClick={() => deleteTodo(item.id)}
              >
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
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
