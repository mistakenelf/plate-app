<script>
  export let label = '';
  export let fullWidth = false;
  export let type = 'button';

  let classes = '';

  $: classes =
    'bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded ' +
    ($$props.class ? $$props.class : '');
</script>

<button {type} on:click class:w-full={fullWidth} class={classes}>
  {label}
</button>
