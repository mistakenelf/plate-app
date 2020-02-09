<script>
  import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
  import { createEventDispatcher } from 'svelte';
  import { _ } from 'svelte-i18n';

  import Modal from '../../../../components/Modal.svelte';
  import Input from '../../../../components/Input.svelte';
  import Button from '../../../../components/Button.svelte';
  import Icon from '../../../../components/Icon.svelte';
  import authStore from '../../../../store/auth';
  import plateStore from '../../../../store/plate';
  import { getId } from '../../../../helpers/getId';

  const dispatch = createEventDispatcher();

  export let isOpen;
  export let plateId;

  let searchText = '';
  let foundUser = null;

  const handleChange = e => {
    searchText = e.target.value;
  };

  const findUser = async () => {
    foundUser = await authStore.userSearch(searchText);
  };

  const handleShare = async () => {
    await plateStore.updatePlate({
      id: plateId,
      sharedWith: getId(foundUser),
    });

    dispatch('handleClose');
  };
</script>

<Modal
  {isOpen}
  isDialog
  title={$_('dashboard.sharePlateModalTitle')}
  on:handleClose={() => dispatch('handleClose')}>
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
