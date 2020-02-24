<script>
  import hamburger from '../../../../assets/icons/hamburger.svg';

  let sidebarOpen = false;
  let triggerEl;

  const openSidebar = () => {
    sidebarOpen = true;
  };

  const closeSidebar = e => {
    if (e.target !== triggerEl) {
      sidebarOpen = false;
    }
  };
</script>

<svelte:body on:click={closeSidebar} />
<nav class="bg-blue-700 flex items-center md:hidden h-12 fixed w-full">
  <img
    bind:this={triggerEl}
    src={hamburger}
    alt="hamburger"
    class="ml-4 cursor-pointer"
    width="32"
    on:click={openSidebar} />
  <div class="text-white text-2xl font-bold ml-2">Plate</div>
</nav>
{#if sidebarOpen}
  <div class="w-48 h-full bg-blue-700 fixed left-0 top-0 flex flex-col">
    <div
      class="items-center text-white text-3xl flex justify-center font-bold
      font-mono tracking-wider">
      <div class="text-3xl mr-2 -mt-2">🍛</div>
      Plate
    </div>
    <div class="mt-8 flex justify-center flex-col items-center">
      <a class="text-white font-bold tracking-wide mb-4" href="/">Dashboard</a>
      <a class="text-white font-bold tracking-wide mb-4" href="/create-project">
        Create Project
      </a>
      <a class="text-white font-bold tracking-wide mb-4" href="/login">Login</a>
    </div>
  </div>
{/if}
