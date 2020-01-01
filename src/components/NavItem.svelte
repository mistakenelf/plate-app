<script>
  import { createEventDispatcher } from 'svelte';

  import Icon from './Icon';

  const dispatch = createEventDispatcher();

  export let isMobile = false;
  export let icon;
  export let label;
</script>

<div
  class:text-gray-900={isMobile}
  class:text-md={isMobile}
  class:border-b-2={isMobile}
  class:mb-4={isMobile}
  class:mr-0={isMobile}
  class:pb-2={isMobile}
  class:text-sm={!isMobile}
  class="text-white cursor-pointer font-bold text-base text-md mr-6 flex
  items-center"
  on:click={() => dispatch('handleClick')}>
  <Icon
    {icon}
    fill={isMobile ? '#333' : '#fff'}
    width="1em"
    height="1em"
    class="mr-2" />
  {label}
</div>
