<script>
  import page from 'page';

  import { currentUser } from '../store/auth';

  import CreatePlate from './CreatePlate/index.svelte';
  import Dashboard from './Dashboard/index.svelte';
  import DefaultLayout from '../layouts/DefaultLayout/index.svelte';
  import PlateDetails from './PlateDetails/index.svelte';
  import Login from './Login/index.svelte';
  import Register from './Register/index.svelte';
  import EditPlate from './EditPlate/index.svelte';

  let pageProps = {
    component: Dashboard,
    layout: DefaultLayout,
  };

  page('/', () => {
    if ($currentUser) {
      pageProps = {
        component: Dashboard,
        layout: DefaultLayout,
      };
    } else {
      page.redirect('/login');
    }
  });

  page('/login', () => {
    if ($currentUser) {
      page.redirect('/');
    } else {
      pageProps = {
        component: Login,
        layout: DefaultLayout,
      };
    }
  });

  page('/register', () => {
    if ($currentUser) {
      page.redirect('/');
    } else {
      pageProps = {
        component: Register,
        layout: DefaultLayout,
      };
    }
  });

  page('/create-plate', () => {
    if ($currentUser) {
      pageProps = {
        component: CreatePlate,
        layout: DefaultLayout,
      };
    } else {
      page.redirect('/login');
    }
  });

  page('/plate/:id', () => {
    if ($currentUser) {
      pageProps = {
        component: PlateDetails,
        layout: DefaultLayout,
      };
    } else {
      page.redirect('/login');
    }
  });

  page('/plate/:id/edit', () => {
    if ($currentUser) {
      pageProps = {
        component: EditPlate,
        layout: DefaultLayout,
      };
    } else {
      page.redirect('/login');
    }
  });

  page.start();
</script>

<svelte:component this={pageProps.layout}>
  <svelte:component this={pageProps.component} {...pageProps} />
</svelte:component>
