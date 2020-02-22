<script>
  import { onMount } from 'svelte';
  import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

  import Routes from '../../routes/index.svelte';
  import en from '../../assets/lang/en.json';
  import fr from '../../assets/lang/fr.json';

  addMessages('en', en);
  addMessages('fr', fr);

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });

  onMount(() => {
    fetch('/__/firebase/init.json').then(async response => {
      window.firebase.initializeApp(await response.json());
    });
  });
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @import '../../assets/styles/index.css';
</style>

<Routes />
