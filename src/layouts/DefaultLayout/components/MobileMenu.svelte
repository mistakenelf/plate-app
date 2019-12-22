<script>
  import { slide } from 'svelte/transition';

  import NavItems from './NavItems';
</script>

<style>
  .menu-container {
    top: 48px;
  }
</style>

<div
  class="menu-container w-full bg-white absolute left-0 shadow"
  transition:slide={{ duration: 200 }}>
  <div class="flex flex-col p-4">
    <NavItems isMobile />
  </div>
</div>
