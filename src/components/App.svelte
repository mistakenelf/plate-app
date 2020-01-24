<script>
  import { onMount } from 'svelte';
  import { addMessages, init } from 'svelte-i18n';

  import authStore, { fetchingUser } from '../store/auth';
  import Routes from '../routes/index.svelte';
  import en from '../assets/lang/en.json';
  import fr from '../assets/lang/fr.json';

  import Loader from './Loader.svelte';

  addMessages('en', en);
  addMessages('fr', fr);

  init({
    fallbackLocale: 'en',
    initialLocale: {
      navigator: true,
    },
  });

  onMount(async () => {
    await authStore.me();
  });
</script>

{#if $fetchingUser}
  <Loader fullPage />
{:else}
  <Routes />
{/if}
