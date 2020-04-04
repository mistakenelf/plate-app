<script>
  export let label = undefined;
  export let type = 'text';
  export let id = undefined;
  export let value = '';
  export let name = '';
  export let isFormField = false;
  export let fullWidth = false;
  export let placeholder = '';
  export let required = false;
  export let hasError = false;

  $: classes =
    'bg-white appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-teal-500 ' +
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
    {id}
    {name}
    {type}
    {value}
    {placeholder}
    {required}
    on:change
    on:keyup
    class:mb-6={isFormField}
    class:border-red-300={hasError}
    class={classes} />
</div>
