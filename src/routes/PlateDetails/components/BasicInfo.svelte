<script>
  import dayjs from 'dayjs';
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../components/Icon.svelte';

  export let title;
  export let dueDate;

  let editing = false;

  const handleEdit = () => {
    editing = true;
  };

  const handleSave = () => {
    editing = false;
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
  <h1 class="font-bold text-3xl md:text-5xl mb-3">{title}</h1>
  <hr class="mb-2" />
  <div class="mb-3 text-lg md:text-xl">
    Due On: {dayjs(dueDate).format('MMMM D, YYYY')}
  </div>
</div>
