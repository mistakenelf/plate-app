<script>
  import { createEventDispatcher } from 'svelte';

  export let exclude = [];

  let classes = '';
  let child;

  $: classes = $$props.class ? $$props.class : '';

  const dispatch = createEventDispatcher();

  const isExcluded = (target) => {
    let parent = target;

    while (parent) {
      if (exclude.indexOf(parent) >= 0 || parent === child) {
        return true;
      }

      parent = parent.parentNode;
    }

    return false;
  };

  const onClickOutside = (event) => {
    if (!isExcluded(event.target)) {
      dispatch('clickoutside');
    }
  };
</script>

<svelte:body on:click={onClickOutside} />
<div class={classes} bind:this={child}>
  <slot />
</div>
