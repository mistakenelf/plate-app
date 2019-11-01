<script>
  import { onMount } from 'svelte'
  import { Workbox } from 'workbox-window'

  import { createDatabase } from '../lib/db'
  import { db } from '../store/db'
  import Routes from '../routes'

  import Loader from './Loader'

  let initializing = true

  onMount(async () => {
    if (process.env.NODE_ENV === 'production') {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          const wb = new Workbox('/sw.js')

          const updateButton = document.querySelector('#app-update')

          wb.addEventListener('waiting', event => {
            updateButton.classList.add('show')
            updateButton.addEventListener('click', () => {
              wb.addEventListener('controlling', event => {
                window.location.reload()
              })
              wb.messageSW({ type: 'SKIP_WAITING' })
            })
          })

          wb.register()
        })
      }
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
  <Routes />
{/if}
