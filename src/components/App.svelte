<script>
  import router from 'page';
  import { onMount } from 'svelte';
  import GoTrue from 'gotrue-js';

  import { auth } from '../store/auth'
  import CreatePlate from '../routes/CreatePlate';
  import Dashboard from '../routes/Dashboard';
  import Login from '../routes/Login';
  import Register from '../routes/Register';
  import DefaultLayout from '../layouts/DefaultLayout';

  onMount(() => {
    const authClient = new GoTrue({
      APIUrl: 'https://plate-app.netlify.com/.netlify/identity',
      audience: '',
      setCookie: false,
    });

    $auth.set(authClient);
  });

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

  router.start();
</script>

<svelte:component this={routeProps.layout}>
  <svelte:component this={routeProps.component} {...routeProps} />
</svelte:component>
