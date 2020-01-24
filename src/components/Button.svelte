<script>
  export let fullWidth = false;
  export let type = 'button';
  export let loading = false;

  let classes = '';

  $: classes =
    'rounded px-4 md:px-5 xl:px-4 py-3 bg-gray-700 hover:bg-gray-800 text-lg uppercase xl:text-base text-white flex justify-center items-center flex-row font-semibold leading-tight shadow-md ' +
    ($$props.class ? $$props.class : '');
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

<button {type} on:click class:w-full={fullWidth} class={classes}>
  {#if loading}
    <div class="spinner" />
  {:else}
    <slot />
  {/if}
</button>
