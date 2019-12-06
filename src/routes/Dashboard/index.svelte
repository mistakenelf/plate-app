<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';
  import { onMount } from 'svelte';

  import Plate from '../../components/Plate';
  import plateApi from '../../api/plateApi';
  import FAB from '../../components/FAB';
  import Loader from '../../components/Loader';

  let plates = [];
  let loadingPlates = false;

  onMount(async () => {
    loadingPlates = true;
    plates = await plateApi.readAll();
    loadingPlates = false;
  });
</script>

<svelte:head>
  <title>Plate - Dashboard</title>
</svelte:head>

{#if loadingPlates}
  <Loader fullPage />
{:else}
  <div class="m-4">
    {#each plates as plate, i}
      <Plate name={plate.data.name} />
    {/each}
  </div>
{/if}

<FAB icon={faPlus} on:click={() => page('/create-plate')} />
