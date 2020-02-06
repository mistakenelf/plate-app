<script>
  import DesktopMenu from './components/DesktopMenu.svelte';
  import MobileMenu from './components/MobileMenu.svelte';
  import Brand from './components/Brand.svelte';
  import LanguageModal from './components/LanguageModal.svelte';

  let modalOpen = false;

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
    left-0 top-0 bg-blue-800">
    <Brand />
    <DesktopMenu on:openModal={openModal} />
    <MobileMenu on:openModal={openModal} />
  </nav>
  <LanguageModal {modalOpen} on:closeModal={closeModal} />
  <div class="pt-12">
    <slot />
  </div>
</main>
