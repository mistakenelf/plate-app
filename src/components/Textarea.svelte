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
    {name}
    {value}
    {rows}
    on:change
    class="bg-white appearance-none shadow rounded w-full py-3 px-4
    text-gray-700 leading-tight focus:outline-none"
    class:mb-8={isFormField} />
</div>
