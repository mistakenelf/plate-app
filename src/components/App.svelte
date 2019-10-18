<script>
  import { onMount } from 'svelte'
  import { authState } from 'rxfire/auth'

  import { auth } from '../lib/firebase'
  import { currentUser } from '../store/auth'
  import Routes from '../routes'

  import Loader from './Loader'

  let initializing = true

  onMount(() => {
    initializing = true
    authState(auth).subscribe(u => {
      initializing = false
      currentUser.set(u)
    })
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
