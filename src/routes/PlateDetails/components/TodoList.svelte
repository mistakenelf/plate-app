<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

  import Checkbox from '../../../components/Checkbox.svelte';
  import plateStore from '../../../store/plate';
  import TextField from '../../../components/TextField.svelte';
  import Button from '../../../components/Button.svelte';
  import Icon from '../../../components/Icon.svelte';
  import { generateId } from '../../../helpers/generateId';

  export let todos;
  export let plateId;

  let newTodos = todos;
  let todoItem = '';

  const toggleCompleted = id => {
    const index = newTodos.findIndex(todo => todo.id === id);
    newTodos[index].completed = !newTodos[index].completed;

    plateStore.updatePlate({
      id: plateId,
      todos: newTodos,
    });
  };

  const handleAddTodo = () => {
    if (todoItem !== '') {
      newTodos = [
        ...newTodos,
        { title: todoItem, completed: false, id: generateId() },
      ];

      todoItem = '';

      plateStore.updatePlate({
        id: plateId,
        todos: newTodos,
      });
    }
  };

  const removeTodo = id => {
    newTodos = newTodos.filter(res => res.id !== id);

    plateStore.updatePlate({
      id: plateId,
      todos: newTodos,
    });
  };
</script>

{#if todos.length > 0}
  <div class="bg-white rounded-lg shadow p-4">
    <h3 class="text-xl font-bold text-gray-700 mb-2 uppercase">Todos</h3>
    <div class="flex flex-row items-center mb-4">
      <TextField
        fullWidth
        name="todoItem"
        type="text"
        placeholder="todo item"
        bind:textFieldValue={todoItem} />
      <Button class="ml-2" on:click={() => handleAddTodo()}>
        <Icon fill="#fff" icon={faPlus} height="1.5rem" width="1.5rem" />
      </Button>
    </div>
    <ul class="mt-2 p-2">
      {#each newTodos as todo}
        <li class="mb-4 flex justify-between items-center">
          <div class="flex items-center">
            <span
              class:line-through={todo.completed}
              class="text-gray-700 text-xl">
              {todo.title}
            </span>
          </div>
          <div>
            <Checkbox
              checked={todo.completed}
              on:click={() => toggleCompleted(todo.id)} />
            <Icon
              class="cursor-pointer ml-4"
              fill="#F56565"
              icon={faTimes}
              height="1.5rem"
              width="1.5rem"
              on:click={() => removeTodo(todo.id)} />
          </div>
        </li>
        <hr class="pb-2 mb-2" />
      {/each}
    </ul>
  </div>
{/if}
