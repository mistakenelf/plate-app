<script>
  import { onMount } from 'svelte';

  import Loader from '../../components/Loader.svelte';
  import plateStore, { loadingPlateDetails, plate } from '../../store/plate';
  import Meta from '../../components/Meta.svelte';

  import BasicInfo from './components/BasicInfo.svelte';
  import Notes from './components/Notes.svelte';
  import Tasks from './components/Tasks.svelte';
  import Status from './components/Status.svelte';
  import Image from './components/Image.svelte';

  const urlArray = window.location.href.split('/');
  const plateId = urlArray[urlArray.length - 1];

  onMount(async () => {
    await plateStore.getPlate(plateId);
  });
</script>

<Meta
  title="Details"
  description="View all the details of your plate, complete tasks and get stuff
  done" />

{#if $loadingPlateDetails}
  <Loader fullPage />
{:else}
  <div class="p-4">
    <div class="flex flex-wrap mt-2">
      <div class="w-full md:w-1/2 px-2">
        <BasicInfo
          title={$plate.data.title}
          dueDate={$plate.data.dueDate}
          description={$plate.data.description}
          {plateId} />
      </div>
      <div class="w-full md:w-1/4 px-2">
        <Image imageSrc={$plate.data.image} {plateId} />
      </div>
      <div class="w-full md:w-1/4 px-2">
        <Status status={$plate.data.status} {plateId} />
      </div>
    </div>
    <div class="flex flex-wrap md:h-64">
      <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
        <Tasks tasks={$plate.data.todos} {plateId} />
      </div>
      <div class="w-full md:w-1/2 px-2">
        <Notes notes={$plate.data.notes} {plateId} />
      </div>
    </div>
  </div>
{/if}
