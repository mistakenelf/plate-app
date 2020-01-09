<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';
  import { onMount } from 'svelte';

  import plateStore, { plates, loadingPlates } from '../../store/plate';
  import authStore, { currentUser } from '../../store/auth';
  import FAB from '../../components/FAB.svelte';
  import Loader from '../../components/Loader.svelte';

  import PlateList from './components/PlateList.svelte';
  import NoPlatesFound from './components/NoPlatesFound.svelte';
 

  onMount(async () => {
    if ($currentUser) {
      await plateStore.getPlates($currentUser.id);
    }
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
  <PlateList plates={$plates} />
{/if}

<FAB icon={faPlus} on:click={() => page('/create-plate')} />
