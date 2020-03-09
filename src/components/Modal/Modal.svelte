<script>
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';

  import Button from '../Button/Button';

  const dispatch = createEventDispatcher();

  export let isOpen = false;
  export let title = '';
  export let okText = 'Ok';
  export let isDialog = false;
</script>

{#if isOpen}
  <div
    class="fixed w-full h-full bottom-0 md:top-0 left-0 flex items-center
    justify-center z-10">
    <div
      class="absolute w-full h-full bg-gray-900 opacity-50"
      on:click={() => dispatch('handleClose')} />
    <div
      transition:fly={{ y: 400 }}
      class="bg-white w-full absolute bottom-0 md:relative md:w-11/12
      md:max-w-md mx-auto rounded-t-lg md:rounded-lg shadow-lg z-50
      overflow-y-auto">
      <div class="py-4 text-left px-6">
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold text-gray-700">{title}</p>
          <svg
            viewBox="0 0 20 20"
            fill="#333"
            class="cursor-pointer w-6 h-6"
            on:click={() => dispatch('handleClose')}>
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414
              1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293
              4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </div>
        <slot />
        <div class="flex justify-end mt-8">
          <Button on:click={() => dispatch('handleClose')} label="Close" />
          {#if !isDialog}
            <Button
              class="ml-4"
              on:click={() => dispatch('handleOK')}
              label={okText} />
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
