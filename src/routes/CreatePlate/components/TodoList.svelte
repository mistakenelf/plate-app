<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
  import { createEventDispatcher } from 'svelte';

  import { generateId } from '../../../helpers/generateId';
  import Input from '../../../components/Input.svelte';
  import Icon from '../../../components/Icon.svelte';
  import Button from '../../../components/Button.svelte';

  const dispatch = createEventDispatcher();

  let todoItem = '';

  export let todos;

  const handleChange = event => {
    todoItem = event.target.value;
  };

  const handleAddTodo = () => {
    if (todoItem !== '') {
      dispatch('addTodo', {
        title: todoItem,
        status: 'open',
        id: generateId(),
      });
      todoItem = '';
    }
  };
</script>

<div class="flex flex-col p-4 rounded shadow bg-white px-4">
  <h3 class="text-3xl text-gray-700 mb-4">Todos</h3>
  <div class="flex flex-row items-center mb-4">
    <Input
      fullWidth
      name="todoItem"
      type="text"
      placeholder="todo item"
      value={todoItem}
      on:change={handleChange} />
    <Button class="ml-2" on:click={() => handleAddTodo()}>Add</Button>
  </div>
  {#if todos.length > 0}
    <ul class="mt-2 p-2">
      {#each todos as todo}
        <li class="mb-4 flex justify-between items-center">
          <div class="flex items-center">
            <span class="text-gray-700 text-xl">{todo.title}</span>
          </div>
          <Icon
            class="cursor-pointer"
            fill="#F56565"
            icon={faTimes}
            height="1.5rem"
            width="1.5rem"
            on:click={() => dispatch('removeTodo', { id: todo.id })} />
        </li>
        <hr class="pb-2 mb-2" />
      {/each}
    </ul>
  {/if}
</div>
