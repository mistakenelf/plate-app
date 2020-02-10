<script>
  import page from 'page';
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';

  import Icon from '../../../../components/Icon.svelte';

  import DeletePlateModal from './DeletePlateModal.svelte';

  export let title;
  export let id;
  export let status;
  export let canDelete = true;

  let deleteModalOpen = false;

  const closeDeleteModal = () => {
    deleteModalOpen = false;
  };

  const openDeleteModal = () => {
    deleteModalOpen = true;
  };
</script>

<div
  class="p-3 mb-4 border-l-8 bg-gray-200 rounded border-solid"
  class:border-green-500={status === 'completed'}
  class:border-orange-500={status === 'in progress'}
  class:border-blue-500={status === 'open'}>
  <div class="flex items-center justify-between">
    <div
      class="text-md md:text-xl w-1/2 truncate text-gray-700 cursor-pointer"
      on:click={() => page(`/plate/${id}`)}>
      {title}
    </div>
    {#if canDelete}
      <div class="items-center flex justify-center">
        <Icon
          class="cursor-pointer ml-4"
          fill="#4a5568"
          icon={faTrashAlt}
          height="1.5rem"
          width="1.5rem"
          on:click={openDeleteModal} />
      </div>
    {/if}
  </div>
</div>
<DeletePlateModal
  plateId={id}
  isOpen={deleteModalOpen}
  on:handleClose={closeDeleteModal} />
