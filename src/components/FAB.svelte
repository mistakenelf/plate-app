<script>
  import Icon from './Icon.svelte';

  export let icon;
  export let loading = false;
</script>

<style>
  @keyframes spinAround {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    pointer-events: none;
  }

  .spinner::after {
    content: '';
    display: block;
    width: 1.2em;
    height: 1.2em;
    border: 2px solid #fff;
    border-radius: 9999px;
    border-right-color: transparent;
    border-top-color: transparent;
    animation: spinAround 500ms infinite linear;
  }
</style>

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
