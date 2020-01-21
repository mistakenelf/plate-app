<script>
  export let label = undefined;
  export let emailFieldValue = '';
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
    {placeholder}
    {required}
    type="email"
    bind:value={emailFieldValue}
    class:w-full={fullWidth}
    class:mb-8={isFormField}
    class="block appearance-none w-full bg-white border-2 border-gray-400
    hover:border-gray-500 px-4 py-3 pr-8 rounded leading-tight
    focus:outline-none focus:shadow-outline" />
</div>
