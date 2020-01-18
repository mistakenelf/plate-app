<script>
  import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

  import ClickOutside from '../../components/ClickOutside.svelte';
  import Icon from '../../components/Icon.svelte';

  import Navbar from './components/Navbar.svelte';
  import MobileMenu from './components/MobileMenu.svelte';
  import Brand from './components/Brand.svelte';

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
  <nav
    class="flex items-center shadow w-full justify-between h-12 fixed z-10
    left-0 top-0 bg-teal-600">
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
        <MobileMenu on:closeMenu={closeMenu} />
      </ClickOutside>
    {/if}
  </nav>
  <div class="pt-12 h-full">
    <slot />
  </div>
</main>
