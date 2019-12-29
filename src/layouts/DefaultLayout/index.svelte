<script>
  import ClickOutside from '../../components/ClickOutside';

  import Navbar from './components/Navbar';
  import MobileMenu from './components/MobileMenu';
  import Brand from './components/Brand';
  import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

  import Icon from '../../components/Icon';

  let menuOpen = false;
  let triggerEl;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };

  const closeMenu = () => {
    menuOpen = false;
  };
</script>

<main>
  <div class="fixed top-0 w-full">
    <nav
      class="flex items-center w-full justify-between h-12 fixed z-10 left-0
      bg-blue-500">
      <Brand />
      <div class="hidden lg:flex items-center h-full">
        <Navbar />
      </div>
      <div class="lg:hidden flex items-center h-full pr-4">
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
          <MobileMenu />
        </ClickOutside>
      {/if}
    </nav>
  </div>
  <div class="pt-12 h-full">
    <slot />
  </div>
</main>
