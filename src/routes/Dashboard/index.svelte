<script>
  import { onMount } from 'svelte';
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';

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

  async function handleNoteChange(e) {
    if (e.target.name === 'firstStickyNote') {
      firstStickyNote = e.target.value
    }

    if (e.target.name === 'secondStickyNote') {
      secondStickyNote = e.target.value
    }

    await $db.collections.stickynotes.upsert({
      id: e.target.id,
      noteText: e.target.value,
    });
  }
</script>

<svelte:head>
  <title>Plate - Dashboard</title>
</svelte:head>

<div
  class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-1 md:-mx-2 xl:-mx-2 p-4">
  <div
    class="my-2 px-2 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-2
    md:px-2 md:w-1/2 xl:my-2 xl:px-2 xl:w-1/4">
    <StickyNote
      id="firstStickyNote"
      name="firstStickyNote"
      on:change={handleNoteChange}
      noteText={firstStickyNote} />
  </div>
  <div
    class="my-2 px-2 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-2
    md:px-2 md:w-1/2 xl:my-2 xl:px-2 xl:w-1/4">
    <StickyNote
      id="secondStickyNote"
      name="secondStickyNote"
      on:change={handleNoteChange}
      noteText={secondStickyNote} />
  </div>
</div>

<FAB icon={faPlus} on:click={() => page('/create-plate')} />
