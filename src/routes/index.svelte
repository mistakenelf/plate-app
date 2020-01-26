<script>
  import page from 'page';

  import { currentUser } from '../store/auth';

  import Dashboard from './Dashboard/index.svelte';
  import DefaultLayout from '../layouts/DefaultLayout/index.svelte';
  import PlateCreator from './PlateCreator/index.svelte';
  import Login from './Login/index.svelte';
  import Register from './Register/index.svelte';

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

  page('/plate/:id', () => {
    if ($currentUser) {
      pageProps = {
        component: PlateCreator,
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
