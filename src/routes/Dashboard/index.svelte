<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';
  import { onMount } from 'svelte'

  import FAB from '../../components/FAB';

  let dashboardData = ''

  onMount(async () => {
    const data = await fetch("/.netlify/functions/hello")
    dashboardData = await data.json();
  })
</script>

<svelte:head>
  <title>Plate - Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>
<div>{dashboardData}</div>
<FAB icon={faPlus} on:click={() => page('/create-plate')} />
