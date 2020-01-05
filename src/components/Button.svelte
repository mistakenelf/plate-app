<script>
  import Loader from './Loader.svelte';

  export let fullWidth = false;
  export let type = 'button';
  export let loading = false;
</script>

<style>
  .spinner {
    position: relative;
    color: transparent !important;
    pointer-events: none;
  }

  .spinner::after {
    content: '';
    position: absolute !important;
    top: calc(50% - (1em / 2));
    left: calc(50% - (1em / 2));
    display: block;
    width: 1em;
    height: 1em;
    border: 2px solid #fff;
    border-radius: 9999px;
    border-right-color: transparent;
    border-top-color: transparent;
    animation: spinAround 500ms infinite linear;
  }

  @keyframes spinAround {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

<button
  class="rounded px-4 md:px-5 xl:px-4 py-3 bg-teal-500 hover:bg-teal-600 text-lg
  uppercase xl:text-base text-white flex justify-center items-center flex-row
  font-semibold leading-tight shadow-md"
  class:w-full={fullWidth}
  {type}>
  {#if loading}
    <div class="spinner px-4 md:px-5 xl:px-4 py-3" />
  {:else}
    <slot />
  {/if}
</button>
