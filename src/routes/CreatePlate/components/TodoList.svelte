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
    dispatch('addTodo', {
      title: todoItem,
      status: 'open',
      id: generateId(),
    });
    todoItem = '';
  };
</script>

<div class="my-2 md:px-2 w-full overflow-hidden xl:my-2 xl:px-2">
  <div
    class="flex flex-col p-4 rounded shadow bg-white border-2 border-gray-400
    px-4">
    <h3 class="text-3xl text-gray-700 mb-4">Todos</h3>
    <div class="flex flex-row items-center">
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
      <ul class="mt-4 p-2">
        {#each todos as todo}
          <li class="mb-4 flex justify-between items-center">
            <div class="flex items-center">
              <span class="text-gray-700 text-lg">{todo.title}</span>
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
</div>
