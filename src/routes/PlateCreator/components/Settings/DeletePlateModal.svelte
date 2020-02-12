<script>
  import { createEventDispatcher } from 'svelte';
  import page from 'page';

  import Modal from '../../../../components/Modal.svelte';
  import plateStore from '../../../../store/plate';

  const dispatch = createEventDispatcher();

  export let deletePlateModalOpen;
  export let plateId;

  const handleDelete = async () => {
    dispatch('handleModalClose');
    await plateStore.deletePlate(plateId);
    page('/');
  };
</script>

<Modal
  isOpen={deletePlateModalOpen}
  title="Delete Plate?"
  on:handleOK={handleDelete}
  on:handleClose={() => dispatch('handleModalClose')}>
  <p>Are you sure you want to delete this plate?</p>
</Modal>
