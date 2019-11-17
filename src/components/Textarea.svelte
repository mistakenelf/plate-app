<script>
  export let label = '';
  export let value = '';
  export let name = '';
  export let isFormField = false;
  export let rows = 5;
</script>

<div class="flex flex-col">
  <label class="block text-gray-600 font-bold mb-1 uppercase text-sm">
    {label}
  </label>
  <textarea
    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
    py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white
    focus:border-teal-500"
    {name}
    class:mb-8={isFormField}
    {value}
    on:change
    {rows} />
</div>
