<script>
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
  import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
  import { _ } from 'svelte-i18n';

  import Icon from '../../../../components/Icon.svelte';
  import plateStore from '../../../../store/plate';
  import authStore from '../../../../store/auth';
  import Modal from '../../../../components/Modal.svelte';
  import Input from '../../../../components/Input.svelte';
  import Button from '../../../../components/Button.svelte';

  let editing = false;
  let editModalOpen = false;
  let searchText = '';
  let foundUser = null;

  const handleModalClose = () => {
    editModalOpen = false;
  };

  const handleChange = e => {
    searchText = e.target.value;
  };

  const handleEdit = () => {
    editing = true;
    editModalOpen = true;
  };

  const findUser = async () => {
    foundUser = await authStore.userSearch(searchText);
  };

  const handleShare = async () => {
    await plateStore.sharePlate({
      id: plateId,
      sharedWith: getId(foundUser),
    });

    handleModalClose();
  };
</script>

<div class="rounded bg-white shadow p-4">
  <div class="flex items-center justify-between">
    <h3 class="text-xl font-bold text-gray-700 uppercase">Share Plate</h3>
    {#if editing}
      <Icon
        class="cursor-pointer -mt-2"
        fill="#4a5568"
        icon={faSave}
        height="1.2rem"
        width="1.2rem"
        on:click={handleShare} />
    {:else}
      <Icon
        class="cursor-pointer -mt-2"
        fill="#4a5568"
        icon={faEdit}
        height="1.2rem"
        width="1.2rem"
        on:click={handleEdit} />
    {/if}
  </div>
</div>
<Modal
  isOpen={editModalOpen}
  isDialog
  title="Share Plate"
  on:handleClose={handleModalClose}>
  <div class="flex flex-row items-center mb-4 mt-6">
    <Input
      fullWidth
      type="text"
      name="username"
      placeholder={$_('dashboard.sharePlateSearchPlaceholder')}
      on:keyup={handleChange} />
    <Button class="ml-2" on:click={() => findUser()}>
      <Icon fill="#fff" icon={faSearch} height="1.5rem" width="1.5rem" />
    </Button>
  </div>
  {#if foundUser}
    <div
      class="mt-4 mb-4 text-xl cursor-pointer text-gray-700"
      on:click={handleShare}>
      {foundUser.data.firstName} {foundUser.data.lastName}
    </div>
  {/if}
</Modal>
