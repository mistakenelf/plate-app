<script>
  import { createEventDispatcher } from 'svelte';
  import { _ } from 'svelte-i18n';

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
  title={$_('dashboard.deletePlateModalTitle')}
  on:handleOK={handleDelete}
  on:handleClose={() => dispatch('handleClose')}>
  <p>{$_('dashboard.deleteModalAreYouSure')}</p>
</Modal>
