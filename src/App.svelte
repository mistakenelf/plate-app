<script>
  import 'firebase/analytics';
  import 'firebase/auth';
  import 'firebase/firestore';
  import 'firebase/performance';
  import 'firebase/storage';

  import firebase from 'firebase/app';
  import { onMount } from 'svelte';

  import { user } from './store/user';

  import Pages from './pages/Pages';

  let loading = true;

  const firebaseConfig = {
    apiKey: 'AIzaSyCcv615ya9Uor9uK1MhIvZOqzqVhy-vzmQ',
    authDomain: 'plate-fd64a.firebaseapp.com',
    databaseURL: 'https://plate-fd64a.firebaseio.com',
    projectId: 'plate-fd64a',
    storageBucket: 'plate-fd64a.appspot.com',
    messagingSenderId: '816045518067',
    appId: '1:816045518067:web:11e6b1c965e9f586d35b86',
    measurementId: 'G-FZ24SC2Z26',
  };

  firebase.initializeApp(firebaseConfig);

  onMount(() => {
    firebase.performance();

    if (
      window.location.pathname === '/login' ||
      window.location.pathname === '/register'
    ) {
      loading = false;
    } else {
      firebase.auth().onAuthStateChanged(res => {
        if (res) {
          loading = false;
          user.set(res);
        } else {
          loading = false;
        }
      });
    }

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

{#if loading}
  <p>loading...</p>
{:else}
  <Pages />
{/if}
