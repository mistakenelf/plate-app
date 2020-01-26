<script>
  import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
  import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';

  import Icon from '../../../components/Icon.svelte';
  import plateStore from '../../../store/plate';
  import Loader from '../../../components/Loader.svelte';

  export let status;
  export let plateId;

  let editing = false;
  let updatingStatus = false;
  let newStatus = status;

  const handleEdit = () => {
    editing = true;
  };

  const setStatus = status => {
    newStatus = status;
    handleSave();
  };

  const handleSave = async () => {
    editing = false;
    updatingStatus = true;

    await plateStore.updatePlate({
      id: plateId,
      status: newStatus,
    });

    updatingStatus = false;
  };
</script>

<div
  class:bg-green-500={newStatus === 'completed'}
  class:bg-orange-500={newStatus === 'in progress'}
  class:bg-blue-500={newStatus === 'open'}
  class="rounded-lg text-white shadow bg-white md:h-full flex items-center
  justify-center mb-6 md:md-0 p-1 text-3xl md:text-4xl text-center relative">
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
  {#if editing}
    <div class="flex justify-between items-center w-full p-4">
      <div
        class="flex flex-col flex-wrap cursor-pointer items-center"
        on:click={() => setStatus('open')}>
        <div
          class="bg-blue-500 border-2 border-white rounded p-4 h-8 w-8 mb-2" />
        <div class="text-sm">Open</div>
      </div>
      <div
        class="flex flex-col cursor-pointer items-center"
        on:click={() => setStatus('in progress')}>
        <div
          class="bg-yellow-700 border-2 border-white rounded p-4 h-8 w-8 mb-2" />
        <div class="text-sm">In Progress</div>
      </div>
      <div
        class="flex flex-col cursor-pointer items-center"
        on:click={() => setStatus('completed')}>
        <div
          class="bg-green-700 border-2 border-white rounded p-4 h-8 w-8 mb-2" />
        <div class="text-sm">Completed</div>
      </div>
    </div>
  {:else if updatingStatus}
    <div class="flex items-center justify-center">
      <Loader />
    </div>
  {:else}{newStatus}{/if}
</div>
