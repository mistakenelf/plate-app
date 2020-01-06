<script>
  import { onMount } from 'svelte';

  import authStore, { fetchingUser } from '../store/auth';
  import Routes from '../routes/index.svelte';

  import Loader from './Loader.svelte';

  onMount(async () => {
    await authStore.me();
  });
</script>

{#if $fetchingUser}
  <Loader fullPage />
{:else}
  <Routes />
{/if}
