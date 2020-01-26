<script>
  import dayjs from 'dayjs';
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../components/Icon.svelte';
  import plateStore from '../../../store/plate';
  import TextField from '../../../components/TextField.svelte';
  import DatePicker from '../../../components/DatePicker.svelte';
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

<div
  class="text-gray-700 shadow rounded-lg md:h-full p-4 bg-white mb-6 relative">
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
    <TextField
      name="title"
      label="title"
      isFormField
      placeholder="title"
      bind:textFieldValue={newTitle} />
    <DatePicker
      name="dueDate"
      label="Due Date"
      fullWidth
      bind:datePickerValue={newDueDate} />
  {:else if updatingBasicInfo}
    <div class="flex items-center justify-center">
      <Loader />
    </div>
  {:else}
    <h1 class="font-bold text-3xl md:text-5xl mb-3">{newTitle}</h1>
    <div class="mb-3 text-lg md:text-xl">
      Due On: {dayjs(newDueDate).format('MMMM D, YYYY')}
    </div>
  {/if}
</div>
