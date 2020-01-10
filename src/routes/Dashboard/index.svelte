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
  import StatCard from './components/StatCard.svelte';
  import StatCardList from './components/StatCardList.svelte';

 let completedCount = 0;
 let openCount = 0;
 let inProgress = 0;
 let completedCountObject = {};
 let openCountObject ={};
 let inProgressObject = {};

onMount(async () => {
    if ($currentUser) {
      await plateStore.getPlates($currentUser.id);
    }
    completedCount = $plates.filter(res => res.data.status === 'complete').length;
        
    openCount = $plates.filter(res => res.data.status === 'open').length;

    inProgress = $plates.filter(res => res.data.status === 'in progress').length;


        completedCountObject = {
        'count': completedCount,
        'text': "Completed"
      }
         openCountObject = {
        'count': openCount,
        'text': "Open"
      }
       inProgressObject = {
        'count': inProgress,
        'text': "In Progress"
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
  <div class="flex items-stretch">

  <StatCard class="flex-1" statData={completedCountObject} />
  <StatCard class="flex-1" statData={openCountObject} />
  <StatCard class="flex-1" statData={inProgressObject} />
  </div>
  <PlateList plates={$plates} />
{/if}

<FAB icon={faPlus} on:click={() => page('/create-plate')} />
