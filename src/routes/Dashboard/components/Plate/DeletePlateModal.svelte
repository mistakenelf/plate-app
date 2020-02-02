<script>
  import { createEventDispatcher } from 'svelte';

  import Modal from '../../../../components/Modal.svelte';
  import plateStore from '../../../../store/plate';

  const dispatch = createEventDispatcher();

  export let isOpen;
  export let plateId;

  const handleDelete = () => {
    dispatch('handleClose');
    plateStore.deletePlate(plateId);
  };
</script>

<Modal
  {isOpen}
  title="Are you sure?"
  on:handleOK={handleDelete}
  on:handleClose={() => dispatch('handleClose')}>
  <p>Are you sure you want to delete this plate?</p>
</Modal>
