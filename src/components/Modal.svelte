<script>
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

  import Icon from './Icon.svelte';
  import Button from './Button.svelte';

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
      md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div class="py-4 text-left px-6">
        <div class="flex justify-between items-center pb-3">
          <p class="text-2xl font-bold text-gray-700">{title}</p>
          <Icon
            class="cursor-pointer"
            fill="#F56565"
            icon={faTimes}
            height="1.5rem"
            width="1.5rem"
            on:click={() => dispatch('handleClose')} />
        </div>
        <slot />
        <div class="flex justify-end mt-6">
          <Button on:click={() => dispatch('handleClose')}>Close</Button>
          {#if !isDialog}
            <Button class="ml-4" on:click={() => dispatch('handleOK')}>
              {okText}
            </Button>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
