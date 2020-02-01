<script>
  import dayjs from 'dayjs';
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../components/Icon.svelte';
  import plateStore from '../../../store/plate';
  import Input from '../../../components/Input.svelte';
  import Modal from '../../../components/Modal.svelte';
  import Textarea from '../../../components/Textarea.svelte';

  export let title;
  export let dueDate;
  export let description;
  export let plateId;

  let editing = false;
  let editModalOpen = false;
  let newTitle = title;
  let newDueDate = dueDate;
  let newDescription = description;

  const handleEdit = () => {
    editing = true;
    editModalOpen = true;
  };

  const handleTitleChange = e => {
    newTitle = e.target.value;
  };

  const handleDueDateChange = e => {
    newDueDate = e.target.value;
  };

  const handleModalClose = () => {
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
    });
  };
</script>

<div class="text-gray-700 shadow rounded-lg p-4 bg-white mb-6 relative">
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
      title="Basic Info"
      isOpen={editing}
      on:handleOK={handleSave}
      on:handleClose={handleModalClose}>
      <Input
        isFormField
        type="text"
        name="title"
        label="title"
        placeholder="title"
        value={newTitle}
        on:change={handleTitleChange} />
      <Input
        isFormField
        fullWidth
        type="date"
        name="dueDate"
        label="Due Date"
        value={newDueDate}
        on:change={handleDueDateChange} />
      <Textarea
        name="description"
        rows={3}
        bind:textareaValue={newDescription} />
    </Modal>
  {/if}
  <h1 class="font-bold text-3xl md:text-5xl mb-3">{newTitle}</h1>
  <div class="mb-3 text-lg md:text-xl">
    Due On: {dayjs(newDueDate).format('MMMM D, YYYY')}
  </div>
  <p class="mt-4">{newDescription}</p>
</div>
