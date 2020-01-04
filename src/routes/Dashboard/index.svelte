<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';
  import { onMount } from 'svelte';

  import { plates, getPlates } from '../../store/plate';
  import { currentUser } from '../../store/auth';
  import FAB from '../../components/FAB';
  import Loader from '../../components/Loader';

  import PlateList from './components/PlateList';
  import NoPlatesFound from './components/NoPlatesFound';

  let loadingPlates = false;

  onMount(async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    loadingPlates = true;
    await getPlates(user.id);
    loadingPlates = false;
  });
</script>

<svelte:head>
  <title>Plate - Dashboard</title>
</svelte:head>

{#if loadingPlates}
  <Loader fullPage />
{:else if $plates.length === 0}
  <NoPlatesFound />
{:else}
  <PlateList plates={$plates} />
{/if}

<FAB icon={faPlus} on:click={() => page('/create-plate')} />
