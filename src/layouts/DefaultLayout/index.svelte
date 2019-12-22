<script>
  import ClickOutside from '../../components/ClickOutside';

  import Navbar from './components/Navbar';
  import MobileMenu from './components/MobileMenu';
  import Brand from './components/Brand';
  import MobileTrigger from './components/MobileTrigger';

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
      <div class="hidden lg:flex items-center h-full pr-4">
        <Navbar />
      </div>
      <MobileTrigger on:toggleMenu={toggleMenu} />
      {#if menuOpen}
        <ClickOutside on:clickoutside={closeMenu} exclude={[triggerEl]}>
          <MobileMenu />
        </ClickOutside>
      {/if}
    </nav>
  </div>
  <div class="pt-12 h-full">
    <slot />
  </div>
</main>
