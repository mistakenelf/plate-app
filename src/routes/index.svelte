<script>
  import page from 'page';

  import DefaultLayout from '../layouts/DefaultLayout';

  import Dashboard from './Dashboard';
  import CreateProject from './CreateProject';
  import Login from './Login';

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

  page('/create-project', () => {
    pageProps = {
      component: CreateProject,
      layout: DefaultLayout,
    };
  });

  page('/login', () => {
    pageProps = {
      component: Login,
      layout: DefaultLayout,
    };
  });

  page.start();
</script>

<svelte:component this={pageProps.layout}>
  <svelte:component this={pageProps.component} {...pageProps} />
</svelte:component>
