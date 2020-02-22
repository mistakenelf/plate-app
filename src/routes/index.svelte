<script>
  import page from 'page';

  import Dashboard from './Dashboard/index.svelte';
  import DefaultLayout from '../layouts/DefaultLayout/index.svelte';

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
