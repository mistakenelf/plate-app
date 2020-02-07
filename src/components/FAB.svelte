<script>
  import Icon from './Icon.svelte';

  export let icon;
  export let loading = false;
</script>

<button
  on:click
  class="bottom-0 right-0 m-4 rounded-full border-none bg-gray-700 fixed p-4
  cursor-pointer flex items-center justify-center">
  {#if loading}
    <div class="spinner" />
  {:else}
    <Icon width="1.5em" height="1.5em" fill="#fff" {icon} />
  {/if}
</button>
