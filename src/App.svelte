<script>
  import { onMount } from 'svelte';
  import { Router } from 'svelte-router-spa';

  import Loader from './components/Loader/Loader';
  import { firebaseUser } from './store/firebase';
  import { routes } from './routes/routes';
  import {
    initializeFirebase,
    firebaseConfig,
    firebaseLoading,
  } from './store/firebase';

  onMount(() => {
    initializeFirebase();

    if (process.env.NODE_ENV === 'production') {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker
            .register('/sw.js')
            .then()
            .catch();
        });
      }
    }
  });
</script>

{#if $firebaseLoading}
  <Loader fullPage />
{:else}
  <Router {routes} />
{/if}
