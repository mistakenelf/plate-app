<script>
  import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

  import Icon from '../../../components/Icon.svelte';

  export let todos;
</script>

{#if todos.length > 0}
  <div class="bg-white rounded shadow p-4">
    <h3 class="text-xl font-bold text-gray-700 mb-2 uppercase">Todos</h3>
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
            width="1.5rem" />
        </li>
        <hr class="pb-2 mb-2" />
      {/each}
    </ul>
  </div>
{/if}
