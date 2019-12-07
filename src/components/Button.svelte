<script>
  export let fullWidth = false;
  export let type = 'button';
</script>

<button
  class="rounded px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500
  hover:bg-teal-600 md:text-xl uppercase xl:text-base text-white font-semibold
  leading-tight shadow-md"
  class:w-full={fullWidth}
  {type}>
  <slot />
</button>
