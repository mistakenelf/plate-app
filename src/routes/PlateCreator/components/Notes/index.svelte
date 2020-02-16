<script>
  import { _ } from 'svelte-i18n';

  import Textarea from '../../../../components/Textarea/index.svelte';
  import plateStore from '../../../../store/plate';
  import Modal from '../../../../components/Modal/index.svelte';

  import EditToggle from './EditToggle.svelte';

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

  const handleChange = e => {
    newNotes = e.target.value;
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
    <h3 class="text-xl font-bold text-gray-700 mb-2 uppercase">
      {$_('plateCreator.notes')}
    </h3>
    <EditToggle
      {editing}
      on:handleSave={handleSave}
      on:handleEdit={handleEdit} />
  </div>
  <Modal
    title={$_('plateCreator.notes')}
    isOpen={editModalOpen}
    on:handleOK={handleSave}
    on:handleClose={handleModalClose}>
    <Textarea name="notes" rows={7} value={newNotes} on:keyup={handleChange} />
  </Modal>
  <p class="text-gray-700">{newNotes}</p>
</div>
