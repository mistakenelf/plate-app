<script>
  import page from 'page';
  import { slide } from 'svelte/transition';
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
  import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';

  import NavLink from '../../../components/NavLink';
  import NavItem from '../../../components/NavItem';
  import { currentUser, logout } from '../../../store/auth';

  const handleLogout = () => {
    logout();
    page('/login');
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
      <NavItem isMobile to="/" icon={faChartLine} label="Dashboard" />
      <NavLink
        isMobile
        href="/create-plate"
        icon={faPlusCircle}
        label="Create Plate" />
      <NavItem
        isMobile
        on:handleClick={handleLogout}
        icon={faSignInAlt}
        label="Logout" />
    {:else}
      <NavLink isMobile href="/login" icon={faSignInAlt} label="Login" />
      <NavLink isMobile href="/register" icon={faUserPlus} label="Register" />
    {/if}
  </div>
</div>
