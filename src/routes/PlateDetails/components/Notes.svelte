<script>
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../components/Icon.svelte';
  import Textarea from '../../../components/Textarea.svelte';
  import plateStore from '../../../store/plate';
  import Loader from '../../../components/Loader.svelte';

  export let notes;
  export let plateId;

  let editing = false;
  let updatingNotes = false;
  let newNotes = notes;

  const handleEdit = () => {
    editing = true;
  };

  const handleSave = async () => {
    editing = false;
    updatingNotes = true;

    await plateStore.updatePlate({
      id: plateId,
      notes: newNotes,
    });

    updatingNotes = false;
  };

  const handleChange = e => {
    newNotes = e.target.value;
  };
</script>

<div class="shadow bg-white rounded p-4">
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
  {#if editing}
    <Textarea name="notes" rows={7} on:change={handleChange} value={newNotes} />
  {:else if updatingNotes}
    <div class="flex items-center justify-center">
      <Loader />
    </div>
  {:else}
    <p class="text-gray-700">{newNotes}</p>
  {/if}
</div>
