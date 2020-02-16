<script>
  export let fullWidth = false;
  export let type = 'button';
  export let loading = false;

  let classes = '';

  $: classes =
    'rounded py-3 bg-gray-700 hover:bg-gray-800 text-lg uppercase xl:text-base text-white flex justify-center items-center flex-row font-semibold leading-tight shadow-md ' +
    ($$props.class ? $$props.class : '');
</script>

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
