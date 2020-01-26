<script>
  import page from 'page';
  import { locale } from 'svelte-i18n';
  import { createEventDispatcher } from 'svelte';
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
  import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';

  import authStore, { currentUser } from '../../../store/auth';

  import NavLink from './NavLink.svelte';

  const dispatch = createEventDispatcher();

  const handleLogout = () => {
    authStore.logout();
    page('/login');
  };

  const navigate = path => {
    page(path);
  };
</script>

<div class="hidden lg:flex items-center h-full">
  {#if $currentUser}
    <NavLink
      on:click={() => navigate('/')}
      icon={faChartLine}
      label="Dashboard" />
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
  <span
    class:flag-icon-us={$locale === 'en-US'}
    class:flag-icon-fr={$locale === 'fr'}
    class="cursor-pointer text-lg flag-icon mr-4"
    on:click={() => dispatch('openModal')} />
</div>
