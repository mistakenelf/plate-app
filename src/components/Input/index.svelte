<script>
  export let label = undefined;
  export let type = 'text';
  export let value = '';
  export let name = '';
  export let isFormField = false;
  export let fullWidth = false;
  export let placeholder = '';
  export let required = false;
  export let hasError = false;

  $: classes =
    'block appearance-none bg-white border-2 border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline ' +
    ($$props.class ? $$props.class : '');
</script>

<div class:w-full={fullWidth} class="flex flex-col">
  {#if label}
    <label class="block text-gray-700 font-bold mb-1 uppercase text-sm">
      {label}
      {#if required}
        <span class="text-red-500">*</span>
      {/if}
    </label>
  {/if}
  <input
    {name}
    {type}
    {value}
    {placeholder}
    {required}
    on:change
    on:keyup
    class:mb-8={isFormField}
    class:border-red-300={hasError}
    class={classes} />
</div>
