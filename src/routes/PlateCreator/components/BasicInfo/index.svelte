<script>
  import dayjs from 'dayjs';
  import { _ } from 'svelte-i18n';
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../../components/Icon.svelte';
  import plateStore from '../../../../store/plate';
  import Input from '../../../../components/Input.svelte';
  import Modal from '../../../../components/Modal.svelte';
  import Textarea from '../../../../components/Textarea.svelte';

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
  {#if editing}
    <Icon
      class="cursor-pointer absolute right-0 top-0 m-2"
      fill="#4a5568"
      icon={faSave}
      height="1.2rem"
      width="1.2rem"
      on:click={handleSave} />
  {:else}
    <Icon
      class="cursor-pointer absolute right-0 top-0 m-2"
      fill="#4a5568"
      icon={faEdit}
      height="1.2rem"
      width="1.2rem"
      on:click={handleEdit} />
  {/if}
  {#if editModalOpen}
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
  {/if}
  <h1 class="font-bold text-3xl mb-2 md:text-5xl">{newTitle}</h1>
  <div class="flex items-center mb-4">
    <div class="text-lg md:text-xl">
      {$_('plateCreator.basicInfoDueOn')}: {dayjs(newDueDate).format('MMMM D, YYYY')}
    </div>
    <div
      class:bg-green-500={newStatus === 'completed'}
      class:bg-orange-500={newStatus === 'in progress'}
      class:bg-blue-500={newStatus === 'open'}
      class="p-1 text-white text-sm rounded font-bold inline-block ml-4">
      {newStatus}
    </div>
  </div>
  <p>{newDescription}</p>
</div>
