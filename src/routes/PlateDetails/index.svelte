<script>
  import { onMount } from 'svelte';

  import Loader from '../../components/Loader.svelte';
  import plateStore, { loadingPlateDetails, plate } from '../../store/plate';

  import BasicInfo from './components/BasicInfo.svelte';
  import Notes from './components/Notes.svelte';
  import Description from './components/Description.svelte';
  import TodoList from './components/TodoList.svelte';
  import Status from './components/Status.svelte';
  import TodoCount from './components/TodoCount.svelte';

  const urlArray = window.location.href.split('/');
  const plateId = urlArray[urlArray.length - 1];

  onMount(async () => {
    await plateStore.getPlate(plateId);
  });
</script>

<svelte:head>
  <title>Plate - Details</title>
  <meta
    name="description"
    content="View all the details of your plate, complete tasks and get stuff
    done" />
</svelte:head>

{#if $loadingPlateDetails}
  <Loader fullPage />
{:else}
  <div class="p-4">
    <div class="flex flex-wrap mt-2 md:h-64 md:mb-6">
      <div class="w-full md:w-1/2 px-2">
        <BasicInfo
          title={$plate.data.title}
          dueDate={$plate.data.dueDate}
          {plateId} />
      </div>
      <div class="w-full md:w-1/4 px-2">
        <TodoCount count={$plate.data.todos.length} />
      </div>
      <div class="w-full md:w-1/4 px-2">
        <Status status={$plate.data.status} {plateId} />
      </div>
    </div>
    <div class="flex flex-wrap md:h-64">
      <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
        <Notes notes={$plate.data.notes} {plateId} />
      </div>
      <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
        <Description description={$plate.data.description} {plateId} />
      </div>
    </div>
    <div class="flex flex-wrap mt-0 md:mt-6">
      <div class="w-full md:w-1/2 px-2">
        <TodoList todos={$plate.data.todos} />
      </div>
    </div>
  </div>
{/if}
