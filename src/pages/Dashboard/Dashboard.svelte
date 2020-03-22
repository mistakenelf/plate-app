<script>
  import { onMount } from 'svelte';

  import Meta from '../../components/Meta/Meta';
  import FAB from '../../components/FAB/FAB';
  import { freezeScroll, unfreezeScroll } from '../../helpers/scroll';
  import { firebaseUser, db } from '../../store/firebase';

  import Plate from './components/Plate/Plate';
  import CreatePlateModal from './components/CreatePlateModal/CreatePlateModal';

  let createPlateModalOpen = false;

  let plates = [];

  onMount(() => {
    db.collection('plates')
      .where('createdBy', '==', $firebaseUser.uid)
      .onSnapshot(querySnapshot => {
        plates = [];

        querySnapshot.forEach(doc => {
          plates = [...plates, doc.data()];
        });
      });
  });

  const openCreatePlateModal = () => {
    freezeScroll();

    createPlateModalOpen = true;
  };

  const closeCreatePlateModal = () => {
    unfreezeScroll();

    createPlateModalOpen = false;
  };
</script>

<Meta
  title="Dashboard"
  description="Plate dashboard is where you get an overview of your plates and
  can start managing them" />

<div class="p-4">
  <div class="grid md:grid-flow-row md:grid-cols-3 gap-4">
    {#each plates as plate}
      <Plate
        title={plate.title}
        description={plate.description}
        dueDate={plate.dueDate}
        category={plate.category} />
    {/each}
  </div>
  <CreatePlateModal
    isOpen={createPlateModalOpen}
    closeModal={closeCreatePlateModal} />
  <FAB on:click={openCreatePlateModal} />
</div>
