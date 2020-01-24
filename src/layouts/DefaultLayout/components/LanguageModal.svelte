<script>
  import { createEventDispatcher } from 'svelte';
  import { locale } from 'svelte-i18n';

  import Modal from '../../../components/Modal.svelte';

  export let modalOpen;

  const dispatch = createEventDispatcher();

  const handleLocaleChange = lang => {
    locale.set(lang);
    dispatch('closeModal');
  };
</script>

<Modal
  title="Select Language"
  isOpen={modalOpen}
  on:handleClose={() => dispatch('closeModal')}>
  <div class="flex flex-row items-center mt-4 mb-4">
    <span
      class="mr-4 cursor-pointer text-5xl flag-icon flag-icon-us"
      on:click={() => handleLocaleChange('en-US')} />
    <span
      class="mr-4 cursor-pointer text-5xl flag-icon flag-icon-fr"
      on:click={() => handleLocaleChange('fr')} />
  </div>
</Modal>
