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

<style>
  .down-icon {
    top: 25px;
  }
</style>

<div class:w-full={fullWidth} class="flex flex-col relative">
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
    class="block appearance-none w-full bg-white border-2 border-gray-300
    hover:border-gray-400 px-2 md:px-4 py-2 md:py-3 pr-8 rounded leading-tight
    focus:outline-none focus:shadow-outline">
    <slot />
  </select>
  <div
    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2
    text-gray-700 down-icon">
    <svg viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414
        1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd" />
    </svg>
  </div>
</div>
