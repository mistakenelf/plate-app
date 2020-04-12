<script>
  export let fullWidth = false;
  export let label = '';
  export let isFormField = false;
  export let selectValue;
  export let placeholder = '';
  export let required = false;
  export let name = '';
  export let id;
</script>

<div class:w-full={fullWidth} class="flex flex-col">
  <label class="block text-gray-300 font-bold mb-1 uppercase text-sm">
    {label}
  </label>
  <select
    {name}
    {id}
    {placeholder}
    {required}
    bind:value={selectValue}
    class:w-full={fullWidth}
    class:mb-8={isFormField}
    class="bg-gray-700 appearance-none rounded w-full px-4 py-3 text-gray-300 leading-tight focus:outline-none focus:border-gray-400">
    <slot />
  </select>
</div>
