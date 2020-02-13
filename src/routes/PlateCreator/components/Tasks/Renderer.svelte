<script>
  import { createEventDispatcher } from 'svelte';
  import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

  import Checkbox from '../../../../components/Checkbox.svelte';
  import Icon from '../../../../components/Icon.svelte';

  const dispatch = createEventDispatcher();

  export let newTasks;
</script>

{#if newTasks.length > 0}
  <ul class="mt-2 p-2">
    {#each newTasks as task}
      <li class="mb-4 flex justify-between items-center">
        <div class="flex items-center w-2/3 md:w-auto">
          <span
            class:line-through={task.completed}
            class="text-gray-700 text-xl">
            {task.title}
          </span>
        </div>
        <div>
          <Checkbox
            checked={task.completed}
            on:click={() => dispatch('toggleCompleted', { id: task.id })} />
          <Icon
            class="cursor-pointer ml-4"
            fill="#F56565"
            icon={faTimes}
            height="1.5rem"
            width="1.5rem"
            on:click={() => dispatch('removeTask', { id: task.id })} />
        </div>
      </li>
      <hr class="pb-2 mb-2" />
    {/each}
  </ul>
{/if}
