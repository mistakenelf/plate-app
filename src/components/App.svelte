<script>
  import router from 'page';
  import { onMount } from 'svelte';

  import CreatePlate from '../routes/CreatePlate';
  import Dashboard from '../routes/Dashboard';
  import Login from '../routes/Login';
  import Register from '../routes/Register';
  import DefaultLayout from '../layouts/DefaultLayout';
  import PlateDetails from '../routes/PlateDetails';
  import { registerServiceWorker } from '../helpers/registerServiceWorker';

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

  onMount(() => {
    if (process.env.NODE_ENV === 'production') {
      registerServiceWorker();
    }
  });

  router.start();
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @import '../assets/styles/index.css';
</style>

<svelte:component this={routeProps.layout}>
  <svelte:component this={routeProps.component} {...routeProps} />
</svelte:component>
