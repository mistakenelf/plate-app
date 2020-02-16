<script>
  import { _ } from 'svelte-i18n';
  import { createEventDispatcher } from 'svelte';
  import page from 'page';

  import Modal from '../../../../components/Modal/index.svelte';
  import Input from '../../../../components/Input/index.svelte';
  import { currentUser } from '../../../../store/auth';
  import plateStore from '../../../../store/plate';
  import { getId } from '../../../../helpers/getId';
  import Loader from '../../../../components/Loader/index.svelte';

  const dispatch = createEventDispatcher();

  export let createPlateModalOpen;

  let plateTitle = '';
  let creatingPlate = false;

  const handleChange = e => {
    plateTitle = e.target.value;
  };

  const createPlate = async () => {
    creatingPlate = true;

    const plate = {
      createdBy: $currentUser.id,
      title: plateTitle,
      notes: 'Some notes',
      status: 'open',
      todos: [],
      sharedWith: [],
    };

    const createdPlate = await plateStore.createPlate(plate);

    creatingPlate = false;

    page(`/plate/${getId(createdPlate)}`);
  };
</script>

<Modal
  title={$_('dashboard.createPlateModalTitle')}
  isOpen={createPlateModalOpen}
  on:handleOK={createPlate}
  on:handleClose={() => dispatch('closeNewPlateModal')}>
  {#if creatingPlate}
    <Loader fullPage />
  {:else}
    <Input
      type="text"
      name="plateTitle"
      placeholder={$_('dashboard.plateTitle')}
      value={plateTitle}
      on:keyup={handleChange} />
  {/if}
</Modal>
