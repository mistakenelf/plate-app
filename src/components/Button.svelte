<script>
  export let fullWidth = false;
  export let type = 'button';
  export let loading = false;

  let classes = '';

  $: classes =
    'rounded py-3 bg-gray-700 hover:bg-gray-800 text-lg uppercase xl:text-base text-white flex justify-center items-center flex-row font-semibold leading-tight shadow-md ' +
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
    width: 1em;
    height: 1em;
    border: 2px solid #fff;
    border-radius: 9999px;
    border-right-color: transparent;
    border-top-color: transparent;
    animation: spinAround 500ms infinite linear;
  }
</style>

<button
  {type}
  on:click
  class:w-full={fullWidth}
  class:px-2={!fullWidth}
  class={classes}
  class:px-4={!fullWidth}
  class:md:px-5={!fullWidth}
  class:xl:px-4={!fullWidth}>
  {#if loading}
    <div class="spinner" />
  {:else}
    <slot />
  {/if}
</button>
