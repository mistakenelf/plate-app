<script>
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';
  import { faShare } from '@fortawesome/free-solid-svg-icons/faShare';

  import Icon from '../../../../components/Icon/index.svelte';

  import SharePlateModal from './SharePlateModal.svelte';
  import DeletePlateModal from './DeletePlateModal.svelte';

  export let plateId;

  let sharePlateModalOpen = false;
  let deletePlateModalOpen = false;

  const openShareModal = () => {
    sharePlateModalOpen = true;
  };

  const openDeleteModal = () => {
    deletePlateModalOpen = true;
  };

  const closeShareModal = () => {
    sharePlateModalOpen = false;
  };

  const closeDeleteModal = () => {
    deletePlateModalOpen = false;
  };
</script>

<div class="flex flex-row items-center">
  <Icon
    class="cursor-pointer ml-4"
    fill="#4a5568"
    icon={faShare}
    height="2.5rem"
    width="2.5rem"
    on:click={openShareModal} />
  <Icon
    class="cursor-pointer ml-4"
    fill="#4a5568"
    icon={faTrashAlt}
    height="2.5rem"
    width="2.5rem"
    on:click={openDeleteModal} />
</div>
<SharePlateModal
  {plateId}
  {sharePlateModalOpen}
  on:handleModalClose={closeShareModal} />
<DeletePlateModal
  {plateId}
  {deletePlateModalOpen}
  on:handleModalClose={closeDeleteModal} />
