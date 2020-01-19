<script>
  import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

  import ClickOutside from '../../components/ClickOutside.svelte';
  import Icon from '../../components/Icon.svelte';
  import Modal from '../../components/Modal.svelte';

  import Navbar from './components/Navbar.svelte';
  import MobileMenu from './components/MobileMenu.svelte';
  import Brand from './components/Brand.svelte';

  let menuOpen = false;
  let triggerEl;
  let modalOpen = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
  };

  const closeMenu = () => {
    menuOpen = false;
  };

  const openModal = () => {
    modalOpen = true;
  };

  const closeModal = () => {
    modalOpen = false;
  };
</script>

<main>
  <nav
    class="flex items-center shadow w-full justify-between h-12 fixed z-10
    left-0 top-0 bg-teal-600">
    <Brand />
    <div class="hidden lg:flex items-center h-full">
      <Navbar />
      <span
        class="cursor-pointer text-lg flag-icon flag-icon-us mr-4"
        on:click={openModal} />
    </div>
    <Modal
      title="Select Language"
      isOpen={modalOpen}
      on:handleClose={closeModal}>
      <div class="flex flex-row items-center mt-4 mb-4">
        <span class="mr-4 cursor-pointer text-5xl flag-icon flag-icon-us" />
        <span class="mr-4 cursor-pointer text-5xl flag-icon flag-icon-fr" />
      </div>
    </Modal>
    <div class="lg:hidden flex items-center h-full pr-4">
      <span
        class="cursor-pointer text-lg flag-icon flag-icon-us"
        on:click={openModal} />
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
