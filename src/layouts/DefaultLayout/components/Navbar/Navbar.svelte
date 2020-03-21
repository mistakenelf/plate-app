<script>
  import firebase from 'firebase/app';
  import { slide, fade } from 'svelte/transition';
  import page from 'page';

  import { currentUser } from '../../../../store/auth';

  let menuOpen = false;

  const logout = async () => {
    await firebase.auth().signOut();
    currentUser.set(null);
    page('/login');
  };
</script>

<style>
  .mobile-menu {
    top: 48px;
  }
</style>

<nav
  class="fixed top-0 w-full flex bg-gray-800 justify-between pr-4 pl-4 h-12
  items-center shadow">
  <div class="flex items-center">
    {#if menuOpen}
      <svg
        viewBox="0 0 20 20"
        fill="#fff"
        class="cursor-pointer w-6 h-6"
        on:click={() => (menuOpen = false)}>
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414
          1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293
          4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd" />
      </svg>
    {:else}
      <svg
        on:click={() => (menuOpen = true)}
        class="cursor-pointer md:hidden"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 6H20M4 12H20M4 18H11"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    {/if}
    <div class="text-white text-3xl font-bold ml-2 md:ml-0">Plate</div>
  </div>
  <ul class="hidden md:flex flex-row">
    {#if $currentUser}
      <li class="text-white ml-4 font-bold">
        <a href="/">Dashboard</a>
      </li>
      <li class="text-white ml-4 font-bold">
        <div class="cursor-pointer" on:click={logout}>Logout</div>
      </li>
    {/if}
    {#if !$currentUser}
      <li class="text-white ml-4 font-bold">
        <a href="/login">Login</a>
      </li>
      <li class="text-white ml-4 font-bold">
        <a href="/register">Register</a>
      </li>
    {/if}
  </ul>
  <div class="flex flex-row">
    <svg viewBox="0 0 20 20" fill="#fff" class="w-8 h-8 cursor-pointer">
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2
        4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0
        004.546-2.084A5 5 0 0010 11z"
        clip-rule="evenodd" />
    </svg>
  </div>
  {#if menuOpen}
    <div
      class="bg-gray-800 w-full absolute mobile-menu left-0 p-4 rounded-b-lg"
      transition:slide>
      <ul>
        {#if $currentUser}
          <li class="text-white font-bold mb-4" transition:fade>
            <a href="/">Dashboard</a>
          </li>
          <li class="text-white font-bold" transition:fade>
            <div class="cursor-pointer" on:click={logout}>Logout</div>
          </li>
        {/if}
        {#if !$currentUser}
          <li class="text-white font-bold mb-4" transition:fade>
            <a href="/login">Login</a>
          </li>
          <li class="text-white font-bold" transition:fade>
            <a href="/register">Register</a>
          </li>
        {/if}
      </ul>
    </div>
  {/if}
</nav>
