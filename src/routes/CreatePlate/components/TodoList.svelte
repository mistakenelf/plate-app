<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
  import { createEventDispatcher } from 'svelte';

  import { generateId } from '../../../helpers/generateId';
  import Input from '../../../components/Input.svelte';
  import Icon from '../../../components/Icon.svelte';

  const dispatch = createEventDispatcher();

  let todoItem = '';

  export let todos;

  const handleChange = event => {
    todoItem = event.target.value;
  };
</script>

<div class="flex flex-col p-4 rounded shadow bg-white border-2 border-gray-400">
  <div class="flex justify-between items-center flex-row mb-4">
    <div class="text-xl text-gray-700">What needs done?</div>
    <Icon
      class="cursor-pointer"
      fill="#4a5568"
      icon={faPlus}
      height="1.5rem"
      width="1.5rem"
      on:click={() => dispatch('addTodo', {
          title: todoItem,
          status: 'open',
          id: generateId(),
        })} />
  </div>
  <Input
    name="todoItem"
    type="text"
    placeholder="todo item"
    value={todoItem}
    on:change={handleChange} />
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
</div>
