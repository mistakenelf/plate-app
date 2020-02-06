<script>
  export let label = '';
  export let name = '';
  export let isFormField = false;
  export let rows = 5;
  export let textareaValue;
</script>

<div class="flex flex-col">
  <label class="block text-gray-700 font-bold mb-1 uppercase text-sm">
    {label}
  </label>
  <textarea
    {name}
    {rows}
    bind:value={textareaValue}
    class="block appearance-none bg-white border-2 border-gray-400
    hover:border-gray-500 px-4 py-3 pr-8 rounded leading-tight
    focus:outline-none focus:shadow-outline"
    class:mb-8={isFormField} />
</div>
