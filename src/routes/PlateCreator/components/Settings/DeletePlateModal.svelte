<script>
  import { createEventDispatcher } from 'svelte';
  import page from 'page';
  import { _ } from 'svelte-i18n';

  import Modal from '../../../../components/Modal/index.svelte';
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
  title={$_('plateCreator.deletePlateModalTitle')}
  on:handleOK={handleDelete}
  on:handleClose={() => dispatch('handleModalClose')}>
  <p>{$_('plateCreator.deleteModalAreYouSure')}</p>
</Modal>
