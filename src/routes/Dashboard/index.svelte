<script>
  import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
  import page from 'page';
  import { onMount } from 'svelte'

  import FAB from '../../components/FAB';
  let json

  onMount(async () => {
    const data = await fetch("/.netlify/functions/hello")
    json = await data.json()
  })
</script>

<svelte:head>
  <title>Plate - Dashboard</title>
</svelte:head>

<div>Dashboard</div>
<div>{json}</div>>

<FAB icon={faPlus} on:click={() => page('/create-plate')} />
