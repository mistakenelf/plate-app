<script>
  import NewPlateButton from './NewPlateButton.svelte'
  import NewPlateModal from './NewPlateModal'

  let newPlateModalOpen = false

  function toggleNewPlateModal() {
    newPlateModalOpen = !newPlateModalOpen
  }
</script>

<NewPlateButton on:toggleNewPlateModal={toggleNewPlateModal} />

{#if newPlateModalOpen}
  <NewPlateModal on:toggleNewPlateModal={toggleNewPlateModal} />
{/if}

<h2>My Plates</h2>
