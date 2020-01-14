<script>
  export let label = undefined;
  export let type = 'text';
  export let value = '';
  export let name = '';
  export let isFormField = false;
  export let fullWidth = false;
  export let placeholder = '';
  export let required = false;
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
    class:w-full={fullWidth}
    class:mb-8={isFormField}
    class="bg-white appearance-none shadow rounded w-full py-3 px-4
    text-gray-700 leading-tight focus:outline-none"
    on:change />
</div>
