<script>
  export let fullWidth = false;
  export let type = 'button';
  export let variant = 'primary';
</script>

<button
  class="border-none p-2 uppercase rounded pointer"
  class:bg-teal-500={variant === 'primary'}
  class:bg-orange-500={variant === 'secondary'}
  class:blue-500={variant === 'tertiary'}
  class:w-full={fullWidth}
  {type}>
  <slot />
</button>
