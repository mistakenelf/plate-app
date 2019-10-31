<script>
  export let icon
  export let fill = '#000'
  export let width = '1em'
  export let height = '1em'

  let path = []
  let classes = ''
  let viewBox = ''

  $: viewBox = '0 0 ' + icon.icon[0] + ' ' + icon.icon[1]
  $: classes = 'fa-svelte ' + ($$props.class ? $$props.class : '')
  $: path = icon.icon[4]
</script>

<style>
  .fa-svelte {
    overflow: visible;
    display: inline-block;
  }
</style>

<svg
  on:click
  aria-hidden="true"
  class={classes}
  {width}
  {height}
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}>
  <path {fill} d={path} />
</svg>
