<script>
  import router from 'page';
  import { onMount } from 'svelte';
  import netlifyIdentity from 'netlify-identity-widget';

  import { currentUser } from '../store/auth';
  import CreatePlate from '../routes/CreatePlate';
  import Dashboard from '../routes/Dashboard';
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
    netlifyIdentity.init({
      APIUrl: 'https://plate-app.netlify.com/.netlify/identity',
    });

    if (process.env.NODE_ENV === 'production') {
      registerServiceWorker();
    }

    netlifyIdentity.on('init', user => {
      if (user) {
        currentUser.set(user);
      } else {
        currentUser.set(null);
      }
    });
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
