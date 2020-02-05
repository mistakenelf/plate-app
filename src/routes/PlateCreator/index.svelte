<script>
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import Loader from '../../components/Loader.svelte';
  import plateStore, { loadingPlateDetails, plate } from '../../store/plate';
  import Meta from '../../components/Meta.svelte';

  import BasicInfo from './components/BasicInfo/index.svelte';
  import Notes from './components/Notes/index.svelte';
  import Tasks from './components/Tasks/index.svelte';
  import Progress from './components/Progress/index.svelte';

  const urlArray = window.location.href.split('/');
  const plateId = urlArray[urlArray.length - 1];

  let plateProgress = 0.0;

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });

  onMount(async () => {
    await plateStore.getPlate(plateId);

    if ($plate.data.todos.length > 0) {
      plateProgress =
        $plate.data.todos.filter(res => res.completed).length /
        $plate.data.todos.length;

      progress.set(plateProgress);
    } else {
      progress.set(0.0);
    }
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
</script>

<Meta
  title="Details"
  description="View all the details of your plate, complete tasks and get stuff
  done" />

{#if $loadingPlateDetails}
  <Loader fullPage />
{:else}
  <div class="p-4">
    <div class="px-2">
      <Progress plateProgress={progress} />
    </div>
    <div class="flex flex-wrap mt-2 mb-4">
      <div class="w-full px-2">
        <BasicInfo
          title={$plate.data.title}
          dueDate={$plate.data.dueDate}
          description={$plate.data.description}
          status={$plate.data.status}
          {plateId} />
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
        <Tasks
          tasks={$plate.data.todos}
          {plateId}
          on:setPlateProgress={setPlateProgress} />
      </div>
      <div class="w-full md:w-1/2 px-2">
        <Notes notes={$plate.data.notes} {plateId} />
      </div>
    </div>
  </div>
{/if}
