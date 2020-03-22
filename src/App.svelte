<script>
  import { onMount } from 'svelte';

  import Loader from './components/Loader/Loader';
  import { firebaseUser } from './store/firebase';
  import Pages from './pages/Pages';
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
  <Pages />
{/if}
