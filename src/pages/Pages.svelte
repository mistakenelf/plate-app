<script>
  import page from 'page';

  import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
  import { user } from '../store/user';

  import Dashboard from './Dashboard/Dashboard';
  import Login from './Login/Login';
  import Register from './Register/Register';

  let pageProps = {
    component: Dashboard,
    layout: DefaultLayout,
  };

  page('/', () => {
    if ($user) {
      pageProps = {
        component: Dashboard,
        layout: DefaultLayout,
      };
    } else {
      page.redirect('/login');
    }
  });

  page('/login', () => {
    if ($user) {
      page.redirect('/');
    } else {
      pageProps = {
        component: Login,
        layout: DefaultLayout,
      };
    }
  });

  page('/register', () => {
    if ($user) {
      page.redirect('/');
    } else {
      pageProps = {
        component: Register,
        layout: DefaultLayout,
      };
    }
  });

  page.start();
</script>

<svelte:component this={pageProps.layout}>
  <svelte:component this={pageProps.component} />
</svelte:component>
