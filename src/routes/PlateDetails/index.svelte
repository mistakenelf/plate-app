<script>
  import { onMount } from 'svelte';

  import Loader from '../../components/Loader.svelte';
  import plateStore, { loadingPlateDetails, plate } from '../../store/plate';

  const urlArray = window.location.href.split('/');
  const plateId = urlArray[urlArray.length - 1];

  onMount(async () => {
    await plateStore.getPlate(plateId);
  });
</script>

<svelte:head>
  <title>Plate - Details</title>
  <meta
    name="description"
    content="View all the details of your plate, complete tasks and get stuff
    done" />
</svelte:head>

{#if $loadingPlateDetails}
  <Loader fullPage />
{:else}
  <div class="m-4 text-gray-700">
    <div class="p-4 bg-white rounded w-full md:w-1/2 shadow mb-4">
      <h1 class="font-bold text-3xl md:text-5xl mb-3">{$plate.data.title}</h1>
      <hr class="mb-2" />
      <div class="mb-3 text-lg md:text-xl">Due On: {$plate.data.dueDate}</div>
      <div class="flex items-center mb-3 text-lg md:text-xl">
        Status: {$plate.data.status}
      </div>
      <p class="text-lg md:text-xl mb-3">{$plate.data.description}</p>
    </div>
    <h4 class="font-bold uppercase">Todo Items</h4>
    <ul class="p-2">
      {#each $plate.data.todos as todo}
        <li class="hover:bg-gray-200 text-lg mb-2">{todo.title}</li>
      {/each}
    </ul>
  </div>
{/if}
