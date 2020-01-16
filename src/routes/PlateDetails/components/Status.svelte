<script>
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../components/Icon.svelte';

  export let status;

  let editing = false;

  const handleEdit = () => {
    editing = true;
  };

  const handleSave = () => {
    editing = false;
  };
</script>

<div
  class:bg-green-500={status === 'complete'}
  class:bg-yellow-400={status === 'in progress'}
  class:bg-blue-700={status === 'open'}
  class="rounded text-white shadow bg-white md:h-full flex items-center
  justify-center mb-6 md:md-0 p-1 text-3xl md:text-5xl relative">
  {#if editing}
    <Icon
      class="cursor-pointer absolute right-0 top-0 m-2"
      fill="#fff"
      icon={faSave}
      height="1.2rem"
      width="1.2rem"
      on:click={handleSave} />
  {:else}
    <Icon
      class="cursor-pointer absolute right-0 top-0 m-2"
      fill="#fff"
      icon={faEdit}
      height="1.2rem"
      width="1.2rem"
      on:click={handleEdit} />
  {/if}
  {status}
</div>
