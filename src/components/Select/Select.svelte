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
  <label class="block text-gray-700 font-bold mb-1 uppercase text-sm">
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
    class="block w-full bg-white border-2 border-gray-300
    hover:border-gray-400 px-4 py-3 rounded leading-tight
    focus:outline-none focus:shadow-outline">
    <slot />
  </select>
</div>
