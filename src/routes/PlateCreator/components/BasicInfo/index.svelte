<script>
  import { _ } from 'svelte-i18n';

  import plateStore from '../../../../store/plate';
  import Input from '../../../../components/Input.svelte';
  import Modal from '../../../../components/Modal.svelte';
  import Textarea from '../../../../components/Textarea.svelte';

  import InfoRenderer from './InfoRenderer.svelte';
  import EditToggle from './EditToggle.svelte';
  import EditModal from './EditModal.svelte';

  export let title;
  export let dueDate;
  export let description;
  export let plateId;
  export let status;

  let editing = false;
  let editModalOpen = false;
  let newTitle = title;
  let newDueDate = dueDate;
  let newDescription = description;
  let newStatus = status;

  const handleEdit = () => {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;

    editing = true;
    editModalOpen = true;
  };

  const handleTitleChange = e => {
    newTitle = e.detail.event.target.value;
  };

  const handleDueDateChange = e => {
    newDueDate = e.detail.event.target.value;
  };

  const handleStatusChange = e => {
    newStatus = e.detail.event.target.value;
  };

  const handleDescriptionChange = e => {
    newDescription = e.detail.event.target.value;
  };

  const handleModalClose = () => {
    document.body.style.position = '';
    document.body.style.top = '';

    editModalOpen = false;
    handleSave();
  };

  const handleSave = async () => {
    editing = false;

    await plateStore.updatePlate({
      id: plateId,
      title: newTitle,
      dueDate: newDueDate,
      description: newDescription,
      status: newStatus,
    });
  };
</script>

<div class="text-gray-700 shadow rounded-lg p-4 bg-white relative">
  <EditToggle {editing} on:handleSave={handleSave} on:handleEdit={handleEdit} />
  <EditModal
    {newDescription}
    {editing}
    {newTitle}
    {newStatus}
    {newDueDate}
    on:handleModalClose={handleModalClose}
    on:handleSave={handleSave}
    on:handleTitleChange={handleTitleChange}
    on:handleDescriptionChange={handleDescriptionChange}
    on:handleDueDateChange={handleDueDateChange}
    on:handleStatusChange={handleStatusChange} />
  <InfoRenderer {newTitle} {newDueDate} {newStatus} {newDescription} />
</div>
