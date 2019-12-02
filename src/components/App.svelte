<script>
  import router from 'page';

  import CreatePlate from '../routes/CreatePlate';
  import Dashboard from '../routes/Dashboard';
  import DefaultLayout from '../layouts/DefaultLayout';

  let routeProps = {
    component: Dashboard,
    layout: DefaultLayout,
  };

  router('/', () => {
    routeProps = {
      component: Dashboard,
      layout: DefaultLayout,
    };
  });

  router('/create-plate', () => {
    routeProps = {
      component: CreatePlate,
      layout: DefaultLayout,
    };
  });

  router.start();
</script>

<svelte:component this={routeProps.layout}>
  <svelte:component this={routeProps.component} {...routeProps} />
</svelte:component>
