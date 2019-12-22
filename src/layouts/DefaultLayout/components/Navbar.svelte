<script>
  import netlifyIdentity from 'netlify-identity-widget';
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
  import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';

  import NavLink from '../../../components/NavLink';
  import NavItem from '../../../components/NavItem';
  import { currentUser, handleLogin, handleLogout } from '../../../store/auth';
</script>

<NavLink href="/" icon={faChartLine} label="Dashboard" />
{#if $currentUser}
  <NavLink href="/create-plate" icon={faPlusCircle} label="Create Plate" />
{/if}
{#if !$currentUser}
  <NavItem on:handleClick={handleLogin} icon={faSignInAlt} label="Login" />
  <NavItem
    on:handleClick={() => netlifyIdentity.open('signup')}
    icon={faUserPlus}
    label="Sign Up" />
{/if}
{#if $currentUser}
  <NavItem on:handleClick={handleLogout} icon={faSignInAlt} label="Logout" />
{/if}
