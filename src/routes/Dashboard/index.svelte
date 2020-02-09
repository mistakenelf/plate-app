<script>
  import { onMount } from 'svelte';

  import { currentUser } from '../../store/auth';
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
  import CreatePlateButton from './components/CreatePlateButton/index.svelte';

  let allMyPlates = [];
  let allSharedPlates = [];
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
<CreatePlateButton />
