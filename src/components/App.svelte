<script>
  import router from 'page';

  import CreatePlate from '../routes/CreatePlate';
  import Dashboard from '../routes/Dashboard';
  import DefaultLayout from '../layouts/DefaultLayout';
  import PlateDetails from '../routes/PlateDetails';
  import Login from '../routes/Login';
  import Register from '../routes/Register';

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

  router('/login', () => {
    routeProps = {
      component: Login,
      layout: DefaultLayout,
    };
  });

  router('/register', () => {
    routeProps = {
      component: Register,
      layout: DefaultLayout,
    };
  });

  router('/create-plate', () => {
    routeProps = {
      component: CreatePlate,
      layout: DefaultLayout,
    };
  });

  router('/plate/:id', () => {
    routeProps = {
      component: PlateDetails,
      layout: DefaultLayout,
    };
  });

  router.start();
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

<svelte:component this={routeProps.layout}>
  <svelte:component this={routeProps.component} {...routeProps} />
</svelte:component>
