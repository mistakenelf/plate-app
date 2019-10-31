<script>
  import { onMount } from 'svelte'

  import { createDatabase } from '../lib/db'
  import { db } from '../store/db'
  import Routes from '../routes'

  import Loader from './Loader'

  let initializing = true

  onMount(async () => {
    initializing = true

    const database = await createDatabase()
    db.set(database)

    initializing = false
  })
</script>

<style>
  @import '../assets/styles/index.css';
</style>

{#if initializing}
  <Loader fullPage />
{:else}
  <Routes />
{/if}
