<script>
  import dayjs from 'dayjs';
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../components/Icon.svelte';
  import plateStore from '../../../store/plate';
  import Input from '../../../components/Input.svelte';
  import Loader from '../../../components/Loader.svelte';

  export let title;
  export let dueDate;
  export let plateId;

  let editing = false;
  let updatingBasicInfo = false;
  let newTitle = title;
  let newDueDate = dueDate;

  const handleEdit = () => {
    editing = true;
  };

  const handleTitleChange = e => {
    newTitle = e.target.value;
  };

  const handleNewDueDateChange = e => {
    newDueDate = e.target.value;
  };

  const handleSave = async () => {
    editing = false;
    updatingBasicInfo = true;

    await plateStore.updatePlate({
      id: plateId,
      title: newTitle,
      dueDate: newDueDate,
    });

    updatingBasicInfo = false;
  };
</script>

<div class="text-gray-700 shadow rounded md:h-full p-4 bg-white mb-6 relative">
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
  {#if editing}
    <Input
      name="title"
      type="text"
      label="title"
      isFormField
      placeholder="title"
      on:change={handleTitleChange}
      value={newTitle} />
    <Input
      name="dueDate"
      type="date"
      label="Due Date"
      fullWidth
      on:change={handleNewDueDateChange}
      value={newDueDate} />
  {:else if updatingBasicInfo}
    <div class="flex items-center justify-center">
      <Loader />
    </div>
  {:else}
    <h1 class="font-bold text-3xl md:text-5xl mb-3">{newTitle}</h1>
    <hr class="mb-2" />
    <div class="mb-3 text-lg md:text-xl">
      Due On: {dayjs(newDueDate).format('MMMM D, YYYY')}
    </div>
  {/if}
</div>
