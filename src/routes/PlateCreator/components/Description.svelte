<script>
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../components/Icon.svelte';
  import Textarea from '../../../components/Textarea.svelte';
  import plateStore from '../../../store/plate';
  import Loader from '../../../components/Loader.svelte';

  export let description;
  export let plateId;

  let editing = false;
  let updatingDescription = false;
  let newDescription = description;

  const handleEdit = () => {
    editing = true;
  };

  const handleSave = async () => {
    editing = false;
    updatingDescription = true;

    await plateStore.updatePlate({
      id: plateId,
      description: newDescription,
    });

    updatingDescription = false;
  };
</script>

<div class="shadow bg-white rounded-lg p-4 md:h-64">
  <div class="flex flex-row justify-between items-center">
    <h3 class="text-xl font-bold text-gray-700 mb-2 uppercase">Description</h3>
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
  {#if editing}
    <Textarea name="description" rows={7} bind:textareaValue={newDescription} />
  {:else if updatingDescription}
    <div class="flex items-center justify-center">
      <Loader />
    </div>
  {:else}
    <p class="text-gray-700">{newDescription}</p>
  {/if}
</div>
