<script>
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
  import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
  import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
  import page from 'page';
  import netlifyIdentity from 'netlify-identity-widget';

  import { currentUser, handleLogin, handleLogout } from '../../../store/auth';
  import ClickOutside from '../../../components/ClickOutside';
  import Icon from '../../../components/Icon';

  import MobileMenu from './MobileMenu';

  let triggerEl;
  let menuOpen = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };

  const closeMenu = () => {
    menuOpen = false;
  };
</script>

<nav
  class="flex items-center w-full justify-between h-12 fixed z-10 left-0
  bg-blue-500">
  <div class="flex items-center h-full">
    <div
      class="w-16 cursor-pointer h-full flex justify-center items-center
      bg-gray-700"
      on:click={() => page('/')}>
      <div class="flex text-3xl mb-2">🍛</div>
    </div>
    <div
      class="ml-4 text-2xl cursor-pointer uppercase font-semibold text-white"
      on:click={() => page('/')}>
      Plate
    </div>
  </div>
  <div class="hidden lg:flex items-center h-full pr-4">
    <a
      class="text-white font-extrabold text-sm uppercase mr-6 flex items-center"
      href="/">
      <Icon
        icon={faChartLine}
        fill="#fff"
        width="1em"
        height="1em"
        class="mr-2" />
      Dashboard
    </a>
    {#if $currentUser}
      <a
        class="text-white font-extrabold text-sm uppercase mr-6 flex
        items-center"
        href="/create-plate">
        <Icon
          icon={faPlusCircle}
          fill="#fff"
          width="1em"
          height="1em"
          class="mr-2" />
        Create Plate
      </a>
    {/if}
    {#if !$currentUser}
      <div
        class="text-white cursor-pointer font-extrabold text-sm uppercase mr-6
        flex items-center"
        on:click={() => handleLogin()}>
        <Icon
          icon={faSignInAlt}
          fill="#fff"
          width="1em"
          height="1em"
          class="mr-2" />
        Login
      </div>
      <div
        class="text-white cursor-pointer font-extrabold text-sm uppercase mr-6
        flex items-center"
        on:click={() => netlifyIdentity.open('signup')}>
        <Icon
          icon={faUserPlus}
          fill="#fff"
          width="1em"
          height="1em"
          class="mr-2" />
        Sign Up
      </div>
    {/if}
    {#if $currentUser}
      <div
        class="text-white cursor-pointer font-extrabold text-sm uppercase mr-6
        flex items-center"
        on:click={() => handleLogout()}>
        <Icon
          icon={faSignInAlt}
          fill="#fff"
          width="1em"
          height="1em"
          class="mr-2" />
        Logout
      </div>
    {/if}
  </div>
  <div class="lg:hidden flex items-center h-full pr-4">
    <div
      bind:this={triggerEl}
      class="ml-4 cursor-pointer"
      aria-label="main menu"
      role="button"
      on:click={toggleMenu}>
      <Icon width="1.5em" height="1.5em" fill="#fff" icon={faBars} />
    </div>
    {#if menuOpen}
      <ClickOutside on:clickoutside={closeMenu} exclude={[triggerEl]}>
        <MobileMenu />
      </ClickOutside>
    {/if}
  </div>
</nav>
