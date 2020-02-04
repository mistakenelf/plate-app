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
  import Meta from '../../components/Meta.svelte';

  import NoPlatesFound from './components/NoPlatesFound/index.svelte';
  import Plate from './components/Plate/index.svelte';
  import Search from './components/Search/index.svelte';

  let allPlates = [];
  let creatingPlate = false;
  const searchText = '';

  onMount(async () => {
    if ($currentUser) {
      await plateStore.getPlates($currentUser.id);
      allPlates = $plates;
    }
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

{#if !$loadingPlates && $plates.length === 0}
  <NoPlatesFound />
{:else}
  <div class="m-4 mb-24">
    <div
      class="w-full mt-8 mb-8 flex md:flex-row flex-col justify-between
      items-center">
      <h3 class="text-gray-700 text-4xl w-full md:w-1/2">
        {$_('dashboard.pageHeader')}
      </h3>
      <div class="w-full md:w-1/2">
        <Search on:keyup={handleChange} {searchText} />
      </div>
    </div>
    {#if $loadingPlates}
      <Loader fullPage class="mt-24" />
    {:else}
      {#each $plates as plate, i}
        <Plate
          title={plate.data.title}
          status={plate.data.status}
          id={getId(plate)} />
      {/each}
    {/if}
  </div>
{/if}

<FAB icon={faPlus} loading={creatingPlate} on:click={() => createPlate()} />
