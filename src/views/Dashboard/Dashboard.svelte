<script>
  import NewPlateButton from './NewPlateButton'
  import StickyNote from './StickyNote'
</script>

<style>
  .row {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: 1rem;
    margin: 15px;
  }
</style>

<svelte:head>
  <title>Plate - Dashboard</title>
</svelte:head>

<NewPlateButton />
<div class="row">
  <StickyNote />
  <StickyNote />
</div>
