<script>
  export let fullWidth = false;
  export let label = '';
  export let isFormField = false;
  export let value = '';
  export let placeholder = '';
  export let required = false;
</script>

<div class:w-full={fullWidth} class="flex flex-col relative">
  <label class="block text-gray-700 font-bold mb-1 uppercase text-sm">
    {label}
  </label>
  <select
    on:change
    class:w-full={fullWidth}
    class:mb-8={isFormField}
    {value}
    {placeholder}
    {required}
    class="bg-white appearance-none border-2 border-gray-400 rounded w-full py-3
    px-4 text-gray-800 leading-tight focus:outline-none focus:border-blue-500">
    <slot />
  </select>
  <div
    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2
    text-gray-700">
    <svg
      class="fill-current h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20">
      <path
        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586
        4.343 8z" />
    </svg>
  </div>
</div>
