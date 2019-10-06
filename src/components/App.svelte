<script>
  import { onMount } from 'svelte'
  import { authState } from 'rxfire/auth'

  import Router from '../router/Router'
  import { auth } from '../lib/firebase'
  import { currentUser } from '../store/auth'
  import Spinner from './Spinner'

  let initializing

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
  <Spinner fullPage />
{:else}
  <Router />
{/if}
