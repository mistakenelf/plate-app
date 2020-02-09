<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';
  import { onMount } from 'svelte';

  import { currentUser } from '../../store/auth';
  import FAB from '../../components/FAB.svelte';
  import { getId } from '../../helpers/getId';
  import Meta from '../../components/Meta.svelte';
  import plateStore, {
    myPlates,
    loadingMyPlates,
    sharedPlates,
    loadingSharedPlates,
  } from '../../store/plate';

  import MyPlates from './components/MyPlates/index.svelte';
  import Header from './components/Header/index.svelte';
  import SharedPlates from './components/SharedPlates/index.svelte';

  let allMyPlates = [];
  let allSharedPlates = [];
  let creatingPlate = false;
  const myPlatesSearchText = '';
  const sharedPlatesSearchText = '';

  onMount(async () => {
    if ($currentUser) {
      Promise.all([
        await plateStore.getMyPlates($currentUser.id),
        await plateStore.getSharedPlates($currentUser.id),
      ]);

      allMyPlates = $myPlates;
      allSharedPlates = $sharedPlates;
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
</script>

<Meta
  title="Dashboard"
  description="Plate dashboard is where you get an overview of your plates and
  can start managing them" />

<div class="m-4 mb-24">
  <div class="grid gap-4 mb-4">
    <Header />
  </div>
  <div class="grid md:grid-flow-col md:grid-cols-2 gap-4">
    <MyPlates
      loading={$loadingMyPlates}
      {myPlates}
      {myPlatesSearchText}
      {allMyPlates} />
    <SharedPlates
      loading={$loadingSharedPlates}
      {sharedPlates}
      {sharedPlatesSearchText}
      {allSharedPlates} />
  </div>
</div>

<FAB icon={faPlus} loading={creatingPlate} on:click={() => createPlate()} />
