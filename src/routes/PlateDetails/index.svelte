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
    <h1 class="text-2xl">{plateData.data.name}</h1>
    <p>{plateData.data.description}</p>
  </div>
{/if}
