<script>
  import { navigate } from 'svelte-routing'
  import { onMount } from 'svelte'

  import NewPlateButton from './components/NewPlateButton'
  import StickyNote from './components/StickyNote'

  let firstStickyNote = ''
  let secondStickyNote = ''

  function handleFirstStickyNoteChange(e) {
    firstStickyNote = e.target.value
  }

  function handleSecondStickyNoteChange(e) {
    secondStickyNote = e.target.value
  }
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
  <StickyNote
    on:change={handleFirstStickyNoteChange}
    noteText={firstStickyNote} />
  <StickyNote
    on:change={handleSecondStickyNoteChange}
    noteText={secondStickyNote} />
</div>
