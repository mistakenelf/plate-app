<script>
  import page from 'page';
  import { faShareSquare } from '@fortawesome/free-solid-svg-icons/faShareSquare';
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';

  import plateStore from '../../../store/plate';
  import { currentUser } from '../../../store/auth';
  import Modal from '../../../components/Modal.svelte';
  import Icon from '../../../components/Icon.svelte';
  import Input from '../../../components/Input.svelte';

  export let title;
  export let id;
  export let status;

  let deleteModalOpen = false;
  let shareModalOpen = false;

  const handleModalClose = () => {
    deleteModalOpen = false;
  };

  const handleModalOpen = () => {
    deleteModalOpen = true;
  };

  const openShareModal = () => {
    shareModalOpen = true;
  };

  const closeShareModal = () => {
    shareModalOpen = false;
  };

  const handleDelete = async () => {
    handleModalClose();
    await plateStore.deletePlate(id);
  };
</script>

<div
  class="plate shadow p-3 bg-white mb-4 border-l-8 rounded border-solid"
  class:border-green-500={status === 'completed'}
  class:border-orange-500={status === 'in progress'}
  class:border-blue-500={status === 'open'}>
  <div class="flex items-center justify-between">
    <div
      class="text-md md:text-xl w-1/2 truncate text-gray-700 cursor-pointer"
      on:click={() => page(`/plate/${id}`)}>
      {title}
    </div>
    <div class="items-center flex justify-center">
      <Icon
        class="cursor-pointer"
        fill="#4a5568"
        icon={faShareSquare}
        height="1.5rem"
        width="1.5rem"
        on:click={openShareModal} />
      <Icon
        class="cursor-pointer ml-4"
        fill="#4a5568"
        icon={faTrashAlt}
        height="1.5rem"
        width="1.5rem"
        on:click={handleModalOpen} />
    </div>
  </div>
</div>
<Modal
  title="Are you sure?"
  isOpen={deleteModalOpen}
  on:handleOK={handleDelete}
  on:handleClose={handleModalClose}>
  <p>Are you sure you want to delete this plate?</p>
</Modal>
<Modal
  isDialog
  title="Lets share your plate"
  isOpen={shareModalOpen}
  on:handleClose={closeShareModal}>
  <Input
    isFormField
    type="text"
    name="username"
    class="mt-4"
    placeholder="Who would you like to share with?" />
</Modal>
