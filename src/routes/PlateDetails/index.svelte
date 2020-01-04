<script>
  import { onMount } from 'svelte';

  import Loader from '../../components/Loader';
  import { getPlate, loadingPlateDetails, plate } from '../../store/plate';

  const urlArray = window.location.href.split('/');
  const plateId = urlArray[urlArray.length - 1];

  onMount(async () => {
    await getPlate(plateId);
  });
</script>

<svelte:head>
  <title>Plate - Details</title>
</svelte:head>

{#if $loadingPlateDetails}
  <Loader fullPage />
{:else}
  <div class="p-4">
    <h1 class="font-bold text-4xl mb-3">{$plate.data.title}</h1>
    <div class="mb-3">Due On: {$plate.data.dueDate}</div>
    <div class="flex items-center mb-3">Status: {$plate.data.status}</div>
    <p class="text-xl mb-3">{$plate.data.description}</p>
    <h4 class="font-bold uppercase">Todo Items</h4>
    <ul class="p-2">
      {#each $plate.data.todos as todo}
        <li class="hover:bg-gray-200 text-lg mb-2">{todo.title}</li>
      {/each}
    </ul>
  </div>
{/if}
