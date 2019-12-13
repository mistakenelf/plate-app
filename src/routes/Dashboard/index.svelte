<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import { faBatteryEmpty } from '@fortawesome/free-solid-svg-icons/faBatteryEmpty';
  import page from 'page';
  import { onMount } from 'svelte';

  import { getId } from '../../helpers/getId';
  import Icon from '../../components/Icon';
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
{:else if plates.length === 0}
  <div class="flex items-center justify-center h-full">
    <div class="flex flex-col items-center">
      <Icon height="6rem" width="6rem" icon={faBatteryEmpty} />
      <p class="text-3xl uppercase font-bold">No Plates Found</p>
    </div>
  </div>
{:else}
  <div class="m-4">
    {#each plates as plate, i}
      <Plate
        name={plate.data.name}
        status={plate.data.status}
        id={getId(plate)} />
    {/each}
  </div>
{/if}

<FAB icon={faPlus} on:click={() => page('/create-plate')} />
