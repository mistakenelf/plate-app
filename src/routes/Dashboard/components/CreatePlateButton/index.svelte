<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';
  import { _ } from 'svelte-i18n';

  import FAB from '../../../../components/FAB.svelte';
  import { currentUser } from '../../../../store/auth';
  import plateStore from '../../../../store/plate';
  import { getId } from '../../../../helpers/getId';
  import Modal from '../../../../components/Modal.svelte';
  import Input from '../../../../components/Input.svelte';

  let createPlateModalOpen = false;
  let plateTitle = '';

  const openNewPlateModal = () => {
    createPlateModalOpen = true;
  };

  const closeNewPlateModal = () => {
    createPlateModalOpen = false;
  };

  const handleChange = e => {
    plateTitle = e.target.value;
  };

  const createPlate = async () => {
    const plate = {
      createdBy: $currentUser.id,
      title: plateTitle,
      notes: 'Some notes',
      status: 'open',
      todos: [],
      sharedWith: [],
    };

    const createdPlate = await plateStore.createPlate(plate);
    page(`/plate/${getId(createdPlate)}`);
  };
</script>

<Modal
  title={$_('dashboard.createPlateModalTitle')}
  isOpen={createPlateModalOpen}
  on:handleOK={createPlate}
  on:handleClose={closeNewPlateModal}>
  <Input
    type="text"
    name="plateTitle"
    placeholder={$_('dashboard.plateTitle')}
    value={plateTitle}
    on:keyup={handleChange} />
</Modal>
<FAB icon={faPlus} on:click={openNewPlateModal} />
