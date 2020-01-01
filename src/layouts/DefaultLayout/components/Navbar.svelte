<script>
  import page from 'page';
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
  import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';

  import NavLink from '../../../components/NavLink';
  import NavItem from '../../../components/NavItem';
  import { currentUser, logout } from '../../../store/auth';

  const handleLogout = () => {
    logout();
    page('/login');
  };
</script>

{#if $currentUser}
  <NavLink href="/" icon={faChartLine} label="Dashboard" />
  <NavLink href="/create-plate" icon={faPlusCircle} label="Create Plate" />
  <NavItem on:handleClick={handleLogout} icon={faSignInAlt} label="Logout" />
{:else}
  <NavLink href="/login" icon={faSignInAlt} label="Login" />
  <NavLink href="/register" icon={faUserPlus} label="Register" />
{/if}
