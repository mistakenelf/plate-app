<script>
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../components/Icon.svelte';
  import Textarea from '../../../components/Textarea.svelte';

  export let description;
  export let editing = false;

  let newDescription = description;

  const handleEdit = () => {
    editing = true;
  };

  const handleSave = () => {
    editing = false;
  };

  const handleChange = e => {
    newDescription = e.target.value;
  };
</script>

<div class="shadow bg-white rounded p-4">
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
    <Textarea
      name="description"
      rows={7}
      on:change={handleChange}
      value={newDescription} />
  {:else}
    <p class="text-gray-700">{newDescription}</p>
  {/if}
</div>
