<script>
  import { _ } from 'svelte-i18n';

  import plateStore from '../../../../store/plate';
  import Input from '../../../../components/Input.svelte';
  import Modal from '../../../../components/Modal.svelte';
  import Textarea from '../../../../components/Textarea.svelte';

  import InfoRenderer from './InfoRenderer.svelte';
  import EditToggle from './EditToggle.svelte';

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
    newTitle = e.target.value;
  };

  const handleDueDateChange = e => {
    newDueDate = e.target.value;
  };

  const handleStatusChange = e => {
    newStatus = e.target.value;
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
  <Modal
    title={$_('plateCreator.basicInfoModalTitle')}
    isOpen={editing}
    on:handleOK={handleSave}
    on:handleClose={handleModalClose}>
    <Input
      isFormField
      type="text"
      name="title"
      label={$_('plateCreator.basicInfoTitle')}
      placeholder={$_('plateCreator.basicInfoTitle')}
      value={newTitle}
      on:change={handleTitleChange} />
    <Input
      isFormField
      type="date"
      name="dueDate"
      label={$_('plateCreator.basicInfoDueDate')}
      value={newDueDate}
      on:change={handleDueDateChange} />
    <div class="block text-gray-700 font-bold mb-1 uppercase text-sm">
      {$_('plateCreator.basicInfoStatus')}
    </div>
    <div class="flex justify-between flex-row items-center mb-6">
      <div class="flex items-center">
        <input
          type="radio"
          name="status"
          value="open"
          checked={newStatus === 'open'}
          on:change={handleStatusChange} />
        <span class="ml-2">{$_('plateCreator.basicInfoOpen')}</span>
      </div>
      <div class="flex items-center">
        <input
          type="radio"
          name="status"
          value="in progress"
          checked={newStatus === 'in progress'}
          on:change={handleStatusChange} />
        <span class="ml-2">{$_('plateCreator.basicInfoInProgress')}</span>
      </div>
      <div class="flex items-center">
        <input
          type="radio"
          name="status"
          value="completed"
          checked={newStatus === 'completed'}
          on:change={handleStatusChange} />
        <span class="ml-2">{$_('plateCreator.basicInfoCompleted')}</span>
      </div>
    </div>
    <Textarea
      name="description"
      label={$_('plateCreator.basicInfoDescription')}
      rows={5}
      bind:textareaValue={newDescription} />
  </Modal>
  <InfoRenderer {newTitle} {newDueDate} {newStatus} {newDescription} />
</div>
