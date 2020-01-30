<script>
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../components/Icon.svelte';
  import Textarea from '../../../components/Textarea.svelte';
  import plateStore from '../../../store/plate';
  import Loader from '../../../components/Loader.svelte';
  import Modal from '../../../components/Modal.svelte';

  export let notes;
  export let plateId;

  let editing = false;
  let updatingNotes = false;
  let editModalOpen = false;
  let newNotes = notes;

  const handleEdit = () => {
    editing = true;
    editModalOpen = true;
  };

  const handleModalClose = () => {
    editModalOpen = false;
    handleSave();
  };

  const handleSave = async () => {
    editing = false;
    updatingNotes = true;
    editModalOpen = false;

    await plateStore.updatePlate({
      id: plateId,
      notes: newNotes,
    });

    updatingNotes = false;
  };
</script>

<div class="shadow bg-white rounded-lg p-4 md:h-64">
  <div class="flex flex-row justify-between items-center">
    <h3 class="text-xl font-bold text-gray-700 mb-2 uppercase">Notes</h3>
    {#if editing}
      <Icon
        class="cursor-pointer -mt-2"
        fill="#4a5568"
        icon={faSave}
        height="1.2rem"
        width="1.2rem"
        on:click={handleSave} />
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
  {#if editModalOpen}
    <Modal
      title="Notes"
      isOpen={editModalOpen}
      on:handleOK={handleSave}
      on:handleClose={handleModalClose}>
      <Textarea name="notes" rows={7} bind:textareaValue={newNotes} />
    </Modal>
  {/if}
  {#if updatingNotes}
    <div class="flex items-center justify-center">
      <Loader />
    </div>
  {/if}
  {#if !updatingNotes}
    <p class="text-gray-700">{newNotes}</p>
  {/if}
</div>
