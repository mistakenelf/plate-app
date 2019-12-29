<script>
  import { createEventDispatcher } from 'svelte';
  import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

  import Icon from '../../../components/Icon';

  const dispatch = createEventDispatcher();

  export let triggerEl = null;
</script>

<div class="lg:hidden flex items-center h-full pr-4">
  <div
    bind:this={triggerEl}
    class="ml-4 cursor-pointer"
    aria-label="main menu"
    role="button"
    on:click={() => dispatch('toggleMenu')}>
    <Icon width="1.5em" height="1.5em" fill="#fff" icon={faBars} />
  </div>
</div>
