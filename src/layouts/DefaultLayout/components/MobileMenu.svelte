<script>
  import page from 'page';
  import { createEventDispatcher } from 'svelte';
  import { locale } from 'svelte-i18n';
  import { slide } from 'svelte/transition';
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
  import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
  import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

  import authStore, { currentUser } from '../../../store/auth';
  import ClickOutside from '../../../components/ClickOutside.svelte';
  import Icon from '../../../components/Icon.svelte';

  import NavLink from './NavLink.svelte';

  const dispatch = createEventDispatcher();

  let triggerEl;
  let menuOpen = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };

  const closeMenu = () => {
    menuOpen = false;
  };

  const handleLogout = () => {
    closeMenu();
    authStore.logout();
    page('/login');
  };

  const navigate = path => {
    closeMenu();
    page(path);
  };
</script>

<style>
  .menu-container {
    top: 48px;
  }
</style>

<div class="lg:hidden flex items-center h-full pr-4">
  <span
    class:flag-icon-us={$locale === 'en-US'}
    class:flag-icon-fr={$locale === 'fr'}
    class="cursor-pointer text-lg flag-icon"
    on:click={() => dispatch('openModal')} />
  <div
    bind:this={triggerEl}
    class="ml-4 cursor-pointer"
    aria-label="main menu"
    role="button"
    on:click={() => toggleMenu()}>
    <Icon width="1.5em" height="1.5em" fill="#fff" icon={faBars} />
  </div>
</div>
{#if menuOpen}
  <ClickOutside
    class="absolute w-full top-0"
    on:clickoutside={closeMenu}
    exclude={[triggerEl]}>
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
  </ClickOutside>
{/if}
