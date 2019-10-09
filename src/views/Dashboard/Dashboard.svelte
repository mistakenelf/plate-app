<script>
  import { db } from '../../lib/firebase'
  import { currentUser } from '../../store/auth'

  import NewPlateButton from './NewPlateButton'
  import StickyNote from './StickyNote'

  let firstStickyNote = ''
  let secondStickyNote = ''

  function handleFirstStickyNoteChange(e) {
    firstStickyNote = e.target.value

    db.collection('notes').add({
      createdBy: $currentUser.uid,
      value: firstStickyNote
    })
  }

  function handleSecondStickyNoteChange(e) {
    secondStickyNote = e.target.value

    db.collection('notes').add({
      createdBy: $currentUser.uid,
      value: secondStickyNote
    })
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
  <StickyNote on:change={handleFirstStickyNoteChange} />
  <StickyNote on:change={handleSecondStickyNoteChange} />
</div>
