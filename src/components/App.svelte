<script>
  import page from 'page';
  import { onMount } from 'svelte';

  import CreatePlate from '../routes/CreatePlate/index.svelte';
  import Dashboard from '../routes/Dashboard/index.svelte';
  import DefaultLayout from '../layouts/DefaultLayout/index.svelte';
  import PlateDetails from '../routes/PlateDetails/index.svelte';
  import Login from '../routes/Login/index.svelte';
  import Register from '../routes/Register/index.svelte';
  import { me, fetchingUser } from '../store/auth';

  import Loader from './Loader.svelte';

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

  onMount(() => {
    me();
  });
</script>

{#if $fetchingUser}
  <Loader fullPage />
{:else}
  <svelte:component this={pageProps.layout}>
    <svelte:component this={pageProps.component} {...pageProps} />
  </svelte:component>
{/if}
