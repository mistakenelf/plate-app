<script>
  import { faTh } from '@fortawesome/free-solid-svg-icons/faTh';
  import page from 'page';

  import { currentUser } from '../../../store/auth';
  import ClickOutside from '../../../components/ClickOutside';
  import Icon from '../../../components/Icon';

  import MainMenu from './MainMenu';

  let triggerEl;
  let menuOpen = false;

  const navItems = [
    {
      label: 'Dashboard',
      href: '/',
      shouldShow: $currentUser !== {},
    },
    {
      label: 'Create Plate',
      href: '/create-plate',
      shouldShow: $currentUser !== {},
    },
    {
      label: 'Login',
      href: '/login',
      shouldShow: $currentUser === {},
    },
    {
      label: 'Register',
      href: '/register',
      shouldShow: $currentUser === {},
    },
  ];

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };

  const closeMenu = () => {
    menuOpen = false;
  };

  const handleLogout = () => {
    $currentUser.logout().then(res => console.log(res));
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
    {#each navItems as navItem}
      {#if navItem.shouldShow}
        <a
          class="text-white font-extrabold text-sm uppercase mr-4"
          href={navItem.href}>
          {navItem.label}
        </a>
      {/if}
    {/each}
    <div
      on:click={() => handleLogout()}
      class="text-white font-extrabold text-sm uppercase mr-4 cursor-pointer">
      Logout
    </div>
  </div>
  <div class="lg:hidden flex items-center h-full pr-4">
    <div
      bind:this={triggerEl}
      class="ml-4 cursor-pointer"
      aria-label="main menu"
      role="button"
      on:click={toggleMenu}>
      <Icon width="1.5em" height="1.5em" fill="#fff" icon={faTh} />
    </div>
    {#if menuOpen}
      <ClickOutside on:clickoutside={closeMenu} exclude={[triggerEl]}>
        <MainMenu />
      </ClickOutside>
    {/if}
  </div>
</nav>
