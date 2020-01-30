<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';

  import plateStore, { plates, loadingPlates } from '../../store/plate';
  import { currentUser } from '../../store/auth';
  import FAB from '../../components/FAB.svelte';
  import Loader from '../../components/Loader.svelte';
  import { getId } from '../../helpers/getId';
  import { generateId } from '../../helpers/generateId';
  import Meta from '../../components/Meta.svelte';

  import NoPlatesFound from './components/NoPlatesFound.svelte';
  import StatCard from './components/StatCard.svelte';
  import Plate from './components/Plate.svelte';
  import Search from './components/Search.svelte';

  let completedCount = 0;
  let openCount = 0;
  let inProgressCount = 0;
  let allPlates = [];
  let creatingPlate = false;
  const searchText = '';

  onMount(async () => {
    if ($currentUser) {
      await plateStore.getPlates($currentUser.id);
    }

    allPlates = $plates;

    completedCount = $plates.filter(res => res.data.status === 'completed')
      .length;

    openCount = $plates.filter(res => res.data.status === 'open').length;

    inProgressCount = $plates.filter(res => res.data.status === 'in progress')
      .length;
  });

  const createPlate = async () => {
    creatingPlate = true;

    const plate = {
      createdBy: $currentUser.id,
      title: 'New Plate',
      dueDate: new Date(),
      description: 'Plate Description',
      notes: 'Some notes',
      status: 'open',
      image: '',
      todos: [],
      files: [],
      sharedWith: [],
    };

    const createdPlate = await plateStore.createPlate(plate);
    page(`/plate/${getId(createdPlate)}`);

    creatingPlate = false;
  };

  const handleChange = e => {
    if (e.target.value === '') {
      plates.set(allPlates);
    } else {
      plateStore.search(e.target.value, $plates);
    }
  };
</script>

<Meta
  title="Dashboard"
  description="Plate dashboard is where you get an overview of your plates and
  can start managing them" />

{#if $loadingPlates}
  <Loader fullPage />
{:else if $plates.length === 0}
  <NoPlatesFound />
{:else}
  <div class="flex flex-wrap mt-2 mx-2">
    <div class="w-1/3 px-2 my-2">
      <StatCard count={openCount} status="open" label={$_('open')} />
    </div>
    <div class="w-1/3 px-2 my-2">
      <StatCard
        count={inProgressCount}
        status="inProgress"
        label={$_('inProgress')} />
    </div>
    <div class="w-1/3 px-2 my-2">
      <StatCard
        count={completedCount}
        status="completed"
        label={$_('completed')} />
    </div>
  </div>
  <div class="m-4 mb-24">
    <div
      class="w-full mt-8 mb-8 flex md:flex-row flex-col justify-between
      items-center">
      <h3 class="text-gray-700 text-4xl w-full md:w-1/2">My Plates</h3>
      <div class="w-full md:w-1/2">
        <Search on:keyup={handleChange} {searchText} />
      </div>
    </div>
    {#each $plates as plate, i}
      <Plate
        title={plate.data.title}
        status={plate.data.status}
        id={getId(plate)} />
    {/each}
  </div>
{/if}

<FAB icon={faPlus} loading={creatingPlate} on:click={() => createPlate()} />
