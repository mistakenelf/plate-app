<script>
  import page from 'page';
  import { _, locale } from 'svelte-i18n';
  import { createEventDispatcher } from 'svelte';
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
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
      label={$_('defaultLayout.dashboardLink')} />
    <NavLink
      on:click={handleLogout}
      icon={faSignInAlt}
      label={$_('defaultLayout.logoutLink')} />
  {:else}
    <NavLink
      on:click={() => navigate('/login')}
      icon={faSignInAlt}
      label={$_('defaultLayout.loginLink')} />
    <NavLink
      on:click={() => navigate('/register')}
      icon={faUserPlus}
      label={$_('defaultLayout.registerLink')} />
  {/if}
  <span
    class:flag-icon-us={$locale === 'en-US'}
    class:flag-icon-fr={$locale === 'fr'}
    class="cursor-pointer text-lg flag-icon mr-4"
    on:click={() => dispatch('openModal')} />
</div>
