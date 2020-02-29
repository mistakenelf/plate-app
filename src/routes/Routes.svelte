<script>
  import page from 'page';

  import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';

  import Dashboard from './Dashboard/Dashboard';

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

  page.start();
</script>

<svelte:component this={pageProps.layout}>
  <svelte:component this={pageProps.component} {...pageProps} />
</svelte:component>
