<script>
  import { onMount } from 'svelte';

  import Loader from '../../components/Loader.svelte';
  import plateStore, { loadingPlateDetails, plate } from '../../store/plate';

  import BasicInfo from './components/BasicInfo';
  import Notes from './components/Notes';
  import Description from './components/Description';

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
  <BasicInfo
    title={$plate.data.title}
    dueDate={$plate.data.dueDate}
    status={$plate.data.status} />
  <div class="flex flex-wrap overflow-hidden">
    <Notes notes={$plate.data.notes} />
    <Description description={$plate.data.description} />
  </div>
  <h4 class="font-bold uppercase pl-4">Todo Items</h4>
  <ul class="p-4">
    {#each $plate.data.todos as todo}
      <li class="hover:bg-gray-200 text-lg mb-2">{todo.title}</li>
    {/each}
  </ul>
{/if}
