<script>
  import page from 'page';
  import { onMount } from 'svelte';

  import CreatePlate from '../routes/CreatePlate';
  import Dashboard from '../routes/Dashboard';
  import DefaultLayout from '../layouts/DefaultLayout';
  import PlateDetails from '../routes/PlateDetails';
  import Login from '../routes/Login';
  import Register from '../routes/Register';
  import { getCurrentUser } from '../store/auth';

  import Loader from './Loader';

  let pageProps = {
    component: Dashboard,
    layout: DefaultLayout,
  };

  page('/', () => {
    if (localStorage.getItem('user')) {
      pageProps = {
        component: Dashboard,
        layout: DefaultLayout,
      };
    } else {
      page.redirect('/login');
    }
  });

  page('/login', () => {
    if (localStorage.getItem('user')) {
      page.redirect('/');
    } else {
      pageProps = {
        component: Login,
        layout: DefaultLayout,
      };
    }
  });

  page('/register', () => {
    if (localStorage.getItem('user')) {
      page.redirect('/');
    } else {
      pageProps = {
        component: Register,
        layout: DefaultLayout,
      };
    }
  });

  page('/create-plate', () => {
    if (localStorage.getItem('user')) {
      pageProps = {
        component: CreatePlate,
        layout: DefaultLayout,
      };
    } else {
      page.redirect('/login');
    }
  });

  page('/plate/:id', () => {
    if (localStorage.getItem('user')) {
      pageProps = {
        component: PlateDetails,
        layout: DefaultLayout,
      };
    } else {
      page.redirect('/login');
    }
  });

  page.start();

  let loading;

  onMount(() => {
    loading = true;
    getCurrentUser();
    loading = false;
  });
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html,
  body,
  main {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
</style>

{#if loading}
  <Loader fullPage />
{:else}
  <svelte:component this={pageProps.layout}>
    <svelte:component this={pageProps.component} {...pageProps} />
  </svelte:component>
{/if}
