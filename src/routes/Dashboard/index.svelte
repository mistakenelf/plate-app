<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';
  import { onMount } from 'svelte';

  import { getId } from '../../helpers/getId';
  import Plate from '../../components/Plate';
  import plateApi from '../../api/plate';
  import FAB from '../../components/FAB';
  import Loader from '../../components/Loader';

  import NoPlatesFound from './components/NoPlatesFound';

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
{:else if plates.length === 0}
  <NoPlatesFound />
{:else}
  <div class="m-4 mb-24">
    {#each plates as plate, i}
      <Plate
        name={plate.data.name}
        status={plate.data.status}
        id={getId(plate)} />
    {/each}
  </div>
{/if}

<FAB icon={faPlus} on:click={() => page('/create-plate')} />
