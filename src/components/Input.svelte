<script>
  export let label = '';
  export let type = 'text';
  export let value = '';
  export let name = '';
  export let isFormField = false;
  export let fullWidth = false;
  export let placeholder = '';
</script>

<div class:w-full={fullWidth} class="flex flex-col">
  <label class="block text-gray-600 font-bold mb-1 uppercase text-sm">
    {label}
  </label>
  <input
    {name}
    class:w-full={fullWidth}
    class:mb-8={isFormField}
    class="bg-white appearance-none border-2 border-gray-400 rounded w-full py-3
    px-4 text-gray-800 leading-tight focus:outline-none focus:border-blue-500"
    {type}
    {value}
    {placeholder}
    on:change />
</div>
