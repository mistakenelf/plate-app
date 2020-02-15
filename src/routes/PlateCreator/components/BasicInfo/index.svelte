<script>
  import plateStore from '../../../../store/plate';

  import InfoRenderer from './InfoRenderer.svelte';
  import EditToggle from './EditToggle.svelte';
  import EditModal from './EditModal.svelte';

  export let title;
  export let dueDate;
  export let plateId;
  export let status;

  let editing = false;
  let newTitle = title;
  let newDueDate = dueDate;
  let newStatus = status;

  const handleEdit = () => {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;

    editing = true;
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

  const handleModalClose = () => {
    document.body.style.position = '';
    document.body.style.top = '';

    handleSave();
  };

  const handleSave = async () => {
    editing = false;

    await plateStore.updatePlate({
      id: plateId,
      title: newTitle,
      dueDate: newDueDate,
      status: newStatus,
    });
  };
</script>

<div class="text-gray-700 shadow rounded-lg p-4 bg-white relative">
  <EditToggle {editing} on:handleSave={handleSave} on:handleEdit={handleEdit} />
  <EditModal
    {editing}
    {newTitle}
    {newStatus}
    {newDueDate}
    on:handleModalClose={handleModalClose}
    on:handleSave={handleSave}
    on:handleTitleChange={handleTitleChange}
    on:handleDueDateChange={handleDueDateChange}
    on:handleStatusChange={handleStatusChange} />
  <InfoRenderer {newTitle} {newDueDate} {newStatus} />
</div>
