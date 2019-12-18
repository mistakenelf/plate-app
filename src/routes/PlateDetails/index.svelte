<script>
  import { onMount } from 'svelte';

  import plateApi from '../../api/plate';
  import Loader from '../../components/Loader';

  const urlArray = window.location.href.split('/');
  const plateId = urlArray[urlArray.length - 1];

  let plateData;
  let loading = true;

  onMount(async () => {
    loading = true;
    plateData = await plateApi.get(plateId);
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
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-5xl mb-2">{plateData.data.name}</h1>
    </div>
    <div class="mb-4">Due On: {plateData.data.dueDate}</div>
    <p class="text-xl">{plateData.data.description}</p>
  </div>
{/if}
