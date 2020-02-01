<script>
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../components/Icon.svelte';
  import Textarea from '../../../components/Textarea.svelte';
  import plateStore from '../../../store/plate';
  import Modal from '../../../components/Modal.svelte';

  export let notes;
  export let plateId;

  let editing = false;
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
    editModalOpen = false;

    await plateStore.updatePlate({
      id: plateId,
      notes: newNotes,
    });
  };
</script>

<div class="shadow bg-white rounded-lg p-4">
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
  <p class="text-gray-700">{newNotes}</p>
</div>
