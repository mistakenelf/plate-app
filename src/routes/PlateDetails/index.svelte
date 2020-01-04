<script>
  import { onMount } from 'svelte';

  import Loader from '../../components/Loader';
  import StatusChip from '../../components/StatusChip';
  import { getPlate } from '../../store/plate';

  const urlArray = window.location.href.split('/');
  const plateId = urlArray[urlArray.length - 1];

  let plateData;
  let loading = true;

  onMount(async () => {
    loading = true;
    plateData = await getPlate(plateId);
    loading = false;
  });
</script>

<svelte:head>
  <title>Plate - Details</title>
</svelte:head>

{#if loading}
  <Loader fullPage />
{:else}
  <div class="p-4">
    <h1 class="font-bold text-4xl mb-3">{plateData.data.title}</h1>
    <div class="mb-3">Due On: {plateData.data.dueDate}</div>
    <div class="flex items-center mb-3">
      <span class="mr-2">Status:</span>
      <StatusChip status={plateData.data.status} />
    </div>
    <p class="text-xl mb-3">{plateData.data.description}</p>
    <h4 class="font-bold uppercase">Todo Items</h4>
    <ul class="p-2">
      {#each plateData.data.todos as todo}
        <li class="hover:bg-gray-200 text-lg mb-2">{todo.title}</li>
      {/each}
    </ul>
  </div>
{/if}
