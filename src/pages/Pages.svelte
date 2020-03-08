<script>
  import page from 'page';

  import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';

  import Dashboard from './Dashboard/Dashboard';
  import Login from './Login/Login';
  import Register from './Register/Register';

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

  page.start();
</script>

<svelte:component this={pageProps.layout}>
  <svelte:component this={pageProps.component} />
</svelte:component>
