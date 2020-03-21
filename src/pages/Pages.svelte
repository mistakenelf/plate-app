<script>
  import page from 'page';

  import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
  import { currentUser } from '../store/auth';

  import Dashboard from './Dashboard/Dashboard';
  import Login from './Login/Login';
  import Register from './Register/Register';

  let pageProps = {
    component: Dashboard,
    layout: DefaultLayout,
  };

  page('/', () => {
    if ($currentUser) {
      pageProps = {
        component: Dashboard,
        layout: DefaultLayout,
      };
    } else {
      page.redirect('/login');
    }
  });

  page('/login', () => {
    if ($currentUser) {
      page.redirect('/');
    } else {
      pageProps = {
        component: Login,
        layout: DefaultLayout,
      };
    }
  });

  page('/register', () => {
    if ($currentUser) {
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
