<script>
  import page from 'page';

  import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
  import { firebaseUser } from '../store/firebase';

  import Dashboard from './Dashboard/Dashboard';
  import Login from './Login/Login';
  import Register from './Register/Register';
  import CreatePlate from './CreatePlate/CreatePlate';
  import PlateDetails from './PlateDetails/PlateDetails';

  let pageProps = {
    component: Dashboard,
    layout: DefaultLayout,
  };

  page('/', () => {
    if ($firebaseUser) {
      pageProps = {
        component: Dashboard,
        layout: DefaultLayout,
      };
    } else {
      page.redirect('/login');
    }
  });

  page('/create-plate', () => {
    if ($firebaseUser) {
      pageProps = {
        component: CreatePlate,
        layout: DefaultLayout,
      };
    } else {
      page.redirect('/login');
    }
  });

  page('/plate/:id', (ctx) => {
    if ($firebaseUser) {
      pageProps = {
        component: PlateDetails,
        layout: DefaultLayout,
        params: ctx.params,
      }
    } else {
      page.redirect('/login');
    }
  });

  page('/login', () => {
    if ($firebaseUser) {
      page.redirect('/');
    } else {
      pageProps = {
        component: Login,
        layout: DefaultLayout,
      };
    }
  });

  page('/register', () => {
    if ($firebaseUser) {
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
  <svelte:component this={pageProps.component} {...pageProps.params} />
</svelte:component>
