<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';
  import { onMount } from 'svelte';

  import plateStore, { plates, loadingPlates } from '../../store/plate';
  import authStore, { currentUser } from '../../store/auth';
  import FAB from '../../components/FAB.svelte';
  import Loader from '../../components/Loader.svelte';
  import { getId } from '../../helpers/getId';

  import NoPlatesFound from './components/NoPlatesFound.svelte';
  import StatCard from './components/StatCard.svelte';
  import Plate from './components/Plate.svelte';

  let completedCount = 0;
  let openCount = 0;
  let inProgressCount = 0;

  onMount(async () => {
    if ($currentUser) {
      await plateStore.getPlates($currentUser.id);
    }

    completedCount = $plates.filter(res => res.data.status === 'completed')
      .length;

    openCount = $plates.filter(res => res.data.status === 'open').length;

    inProgressCount = $plates.filter(res => res.data.status === 'in progress')
      .length;
  });
</script>

<svelte:head>
  <title>Plate - Dashboard</title>
  <meta
    name="description"
    content="Plate dashboard is where you get an overview of your plates and can
    start managing them" />
</svelte:head>

{#if $loadingPlates}
  <Loader fullPage />
{:else if $plates.length === 0}
  <NoPlatesFound />
{:else}
  <div class="flex flex-wrap mt-2 mx-2">
    <div class="w-1/3 px-2 my-2">
      <StatCard count={openCount} label="Open" />
    </div>
    <div class="w-1/3 px-2 my-2">
      <StatCard count={inProgressCount} label="In Progress" />
    </div>
    <div class="w-1/3 px-2 my-2">
      <StatCard count={completedCount} label="Completed" />
    </div>
  </div>
  <div class="m-4 mb-24">
    {#each $plates as plate, i}
      <Plate
        title={plate.data.title}
        status={plate.data.status}
        id={getId(plate)} />
    {/each}
  </div>
{/if}

<FAB icon={faPlus} on:click={() => page('/create-plate')} />
