<script>
  import { onMount } from 'svelte';
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';

  import { db } from '../../store/db';
  import FAB from '../../components/FAB';
</script>

<svelte:head>
  <title>Plate - Dashboard</title>
</svelte:head>

<div>Dashboard</div>

<FAB icon={faPlus} on:click={() => page('/create-plate')} />
