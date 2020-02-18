<script>
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import Loader from '../../components/Loader/index.svelte';
  import plateStore, { loadingPlateDetails, plate } from '../../store/plate';
  import Meta from '../../components/Meta/index.svelte';

  import BasicInfo from './components/BasicInfo/index.svelte';
  import Notes from './components/Notes/index.svelte';
  import Tasks from './components/Tasks/index.svelte';
  import Progress from './components/Progress/index.svelte';
  import SharedWith from './components/SharedWith/index.svelte';
  import Settings from './components/Settings/index.svelte';

  const urlArray = window.location.href.split('/');
  const plateId = urlArray[urlArray.length - 1];

  let plateProgress = 0.0;

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });

  const setPlateProgress = () => {
    if ($plate.data.todos.length > 0) {
      plateProgress =
        $plate.data.todos.filter(res => res.completed).length /
        $plate.data.todos.length;

      progress.set(plateProgress);
    } else {
      progress.set(0.0);
    }
  };

  onMount(async () => {
    await plateStore.getPlateDetails(plateId);

    setPlateProgress();
  });
</script>

<Meta
  title="Details"
  description="View all the details of your plate, complete tasks and get stuff
  done" />

{#if $loadingPlateDetails}
  <Loader fullPage />
{:else}
  <div class="p-4 pb-12">
    <Progress plateProgress={progress} />
    <div class="grid grid-cols-1 md:grid-flow-col md:grid-cols-2 gap-4 mb-4">
      <BasicInfo
        title={$plate.data.title}
        status={$plate.data.status}
        {plateId} />
      <Settings {plateId} />
    </div>
    <div class="grid md:grid-flow-col grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <Tasks
        tasks={$plate.data.todos}
        {plateId}
        on:setPlateProgress={setPlateProgress} />
      <Notes notes={$plate.data.notes} {plateId} />
    </div>
    <div class="grid md:grid-flow-col grid-cols-1 md:grid-cols-2 gap-4">
      <SharedWith {plateId} sharedWith={$plate.data.sharedWith} />
    </div>
  </div>
{/if}
