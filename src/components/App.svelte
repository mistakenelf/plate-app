<script>
  import { onMount } from 'svelte'
  import { Workbox } from 'workbox-window'
  import router from 'page'

  import { createDatabase } from '../helpers/db'
  import { db } from '../store/db'
  import CreatePlate from '../routes/CreatePlate'
  import Dashboard from '../routes/Dashboard'
  import DefaultLayout from '../layouts/DefaultLayout'

  import Loader from './Loader'

  let initializing = true

  let routeProps = {
    component: Dashboard,
    layout: DefaultLayout
  }

  router('/', () => {
    routeProps = {
      component: Dashboard,
      layout: DefaultLayout
    }
  })

  router('/create-plate', () => {
    routeProps = {
      component: CreatePlate,
      layout: DefaultLayout
    }
  })

  router.start()

  onMount(async () => {
    if (process.env.NODE_ENV === 'production') {
      registerServiceWorker()
    }

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
  <svelte:component this={routeProps.layout}>
    <svelte:component this={routeProps.component} {...routeProps} />
  </svelte:component>
{/if}
