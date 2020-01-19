<script>
  import page from 'page';
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
  import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';

  import authStore, { currentUser } from '../../../store/auth';

  import NavLink from './NavLink.svelte';

  const handleLogout = () => {
    authStore.logout();
    page('/login');
  };

  const navigate = path => {
    page(path);
  };
</script>

{#if $currentUser}
  <NavLink
    on:click={() => navigate('/')}
    icon={faChartLine}
    label="Dashboard" />
  <NavLink
    on:click={() => navigate('/create-plate')}
    icon={faPlusCircle}
    label="Create Plate" />
  <NavLink on:click={handleLogout} icon={faSignInAlt} label="Logout" />
{:else}
  <NavLink
    on:click={() => navigate('/login')}
    icon={faSignInAlt}
    label="Login" />
  <NavLink
    on:click={() => navigate('/register')}
    icon={faUserPlus}
    label="Register" />
{/if}
