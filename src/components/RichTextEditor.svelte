<script>
  import Jodit from 'jodit';
  import { onMount } from 'svelte';

  onMount(() => {
    new Jodit('#editor', {
      minHeight: 400,
      toolbarButtonSize: 'large',
    });
  });
</script>

<style>
  @import '~jodit/build/jodit.min.css';
</style>

<div id="editor" />
