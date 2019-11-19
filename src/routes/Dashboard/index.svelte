<script>
  import { onMount } from 'svelte';
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

  import { db } from '../../store/db';
  import FAB from '../../components/FAB';
  import StickyNote from '../../components/StickyNote';

  let firstStickyNote = '';
  let secondStickyNote = '';

  onMount(async () => {
    $db.collections.stickynotes.find().$.subscribe(res => {
      if (res[0]) {
        firstStickyNote = res[0].toJSON().noteText;
      }

      if (res[1]) {
        secondStickyNote = res[1].toJSON().noteText;
      }
    });
  });

  async function handleFirstStickyNoteChange(e) {
    firstStickyNote = e.target.value;

    await $db.collections.stickynotes.upsert({
      id: '123456',
      noteText: e.target.value,
    });
  }

  async function handleSecondStickyNoteChange(e) {
    secondStickyNote = e.target.value;

    await $db.collections.stickynotes.upsert({
      id: '342234',
      noteText: e.target.value,
    });
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

<div class="row">
  <StickyNote
    on:change={handleFirstStickyNoteChange}
    noteText={firstStickyNote} />
  <StickyNote
    on:change={handleSecondStickyNoteChange}
    noteText={secondStickyNote} />
</div>

<FAB icon={faPlus} />
