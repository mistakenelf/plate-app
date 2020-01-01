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
    pageProps = {
      component: Dashboard,
      layout: DefaultLayout,
    };
  });

  page('/login', () => {
    pageProps = {
      component: Login,
      layout: DefaultLayout,
    };
  });

  page('/register', () => {
    pageProps = {
      component: Register,
      layout: DefaultLayout,
    };
  });

  page('/create-plate', () => {
    pageProps = {
      component: CreatePlate,
      layout: DefaultLayout,
    };
  });

  page('/plate/:id', () => {
    pageProps = {
      component: PlateDetails,
      layout: DefaultLayout,
    };
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
