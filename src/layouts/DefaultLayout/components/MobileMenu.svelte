<script>
  import page from 'page';
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
  import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';

  import NavLink from '../../../components/NavLink.svelte';
  import { currentUser, logout } from '../../../store/auth';

  const dispatch = createEventDispatcher();

  const handleLogout = () => {
    dispatch('closeMenu');
    logout();
    page('/login');
  };

  const navigate = path => {
    dispatch('closeMenu');
    page(path);
  };
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
    {#if $currentUser}
      <NavLink
        isMobile
        on:click={() => navigate('/')}
        icon={faChartLine}
        label="Dashboard" />
      <NavLink
        isMobile
        on:click={() => navigate('/create-plate')}
        icon={faPlusCircle}
        label="Create Plate" />
      <NavLink
        isMobile
        on:click={handleLogout}
        icon={faSignInAlt}
        label="Logout" />
    {:else}
      <NavLink
        on:click={() => navigate('/login')}
        isMobile
        icon={faSignInAlt}
        label="Login" />
      <NavLink
        on:click={() => navigate('/register')}
        isMobile
        icon={faUserPlus}
        label="Register" />
    {/if}
  </div>
</div>
