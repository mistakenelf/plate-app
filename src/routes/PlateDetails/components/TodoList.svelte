<script>
  import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

  import Input from '../../../components/Input.svelte';
  import plateStore from '../../../store/plate';

  export let todos;
  export let plateId;

  let newTodos = todos;

  const toggleCompleted = id => {
    const index = newTodos.findIndex(todo => todo.id === id);
    newTodos[index].completed = !newTodos[index].completed;

    plateStore.updatePlate({
      id: plateId,
      todos: newTodos,
    });
  };
</script>

{#if todos.length > 0}
  <div class="bg-white rounded shadow p-4">
    <h3 class="text-xl font-bold text-gray-700 mb-2 uppercase">Todos</h3>
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
          <input
            type="checkbox"
            checked={todo.completed}
            on:click={() => toggleCompleted(todo.id)} />
        </li>
        <hr class="pb-2 mb-2" />
      {/each}
    </ul>
  </div>
{/if}
