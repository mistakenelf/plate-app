<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import { createEventDispatcher } from 'svelte';

  import Input from './Input';
  import Icon from './Icon';

  const dispatch = createEventDispatcher();

  export let todos;

  console.log(todos)
</script>

<div class="flex flex-col p-4 rounded shadow bg-white">
  <div class="flex justify-between items-center flex-row mb-4">
    <div class="text-2xl font-bold">Todos</div>
    <Icon
      class="cursor-pointer"
      fill="#4a5568"
      icon={faPlus}
      height="1.5rem"
      width="1.5rem"
      on:click={() => dispatch('addTodo', { title: 'new todo' })} />
  </div>
  <Input
    name="todoItem"
    type="text"
    isFormField
    placeholder="todo item"
    value={''} />
  <hr />
  {#each todos as todo}
    <div>{todo.title}</div>
  {/each}
</div>
