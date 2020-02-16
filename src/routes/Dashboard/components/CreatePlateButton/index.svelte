<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

  import FAB from '../../../../components/FAB/index.svelte';

  import CreatePlateModal from './CreatePlateModal.svelte';

  let createPlateModalOpen = false;

  const openNewPlateModal = () => {
    createPlateModalOpen = true;
  };

  const closeNewPlateModal = () => {
    createPlateModalOpen = false;
  };
</script>

<CreatePlateModal
  {createPlateModalOpen}
  on:closeNewPlateModal={closeNewPlateModal} />
<FAB icon={faPlus} on:click={openNewPlateModal} />
