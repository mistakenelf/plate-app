<script>
  import { onMount } from 'svelte'
  import { collectionData } from 'rxfire/firestore'
  import { tap } from 'rxjs/operators'

  import { db } from '../../lib/firebase'
  import { currentUser } from '../../store/auth'

  import NewPlateButton from './NewPlateButton'
  import StickyNote from './StickyNote'

  let firstStickyNote = ''
  let secondStickyNote = ''

  onMount(async () => {
    const query = db
      .collection('notes')
      .where('createdBy', '==', $currentUser.uid)

    collectionData(query, 'id').subscribe(res => {
      firstStickyNote = res[0].value
      secondStickyNote = res[1].value
    })
  })

  function handleFirstStickyNoteChange(e) {
    firstStickyNote = e.target.value

    db.collection('notes')
      .doc(`${$currentUser.uid} NOTE 1`)
      .set({
        createdBy: $currentUser.uid,
        value: firstStickyNote
      })
  }

  function handleSecondStickyNoteChange(e) {
    secondStickyNote = e.target.value

    db.collection('notes')
      .doc(`${$currentUser.uid} NOTE 2`)
      .set({
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
  <StickyNote
    on:change={handleFirstStickyNoteChange}
    noteText={firstStickyNote} />
  <StickyNote
    on:change={handleSecondStickyNoteChange}
    noteText={secondStickyNote} />
</div>
