<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';
  import { onMount } from 'svelte';

  import plateApi from '../../api/plateApi';
  import FAB from '../../components/FAB';

  let plates = [];

  onMount(async () => {
    plates = await plateApi.readAll();
  });
</script>

<svelte:head>
  <title>Plate - Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>

{#each plates as plate, i}
  <div>{plate.data.name}</div>
{/each}

<FAB icon={faPlus} on:click={() => page('/create-plate')} />
