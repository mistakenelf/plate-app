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
    class="block appearance-none w-full bg-white border border-gray-400
    hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight
    focus:outline-none focus:shadow-outline"
    class:mb-8={isFormField} />
</div>
