<script>
  import { slide } from 'svelte/transition';
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
  import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';

  import NavLink from '../../../components/NavLink';
  import NavItem from '../../../components/NavItem';
</script>

<style>
  .menu-container {
    top: 48px;
  }
</style>

<div
  class="menu-container w-full bg-white absolute left-0 shadow"
  transition:slide={{ duration: 200 }}>
  <div class="flex flex-col p-4">
    <NavLink isMobile href="/" icon={faChartLine} label="dashboard" />
    <NavLink
      isMobile
      href="/create-plate"
      icon={faPlusCircle}
      label="create plate" />
    <NavLink href="/login" isMobile icon={faSignInAlt} label="login" />
    <NavLink href="/register" isMobile icon={faUserPlus} label="register" />
    <NavItem isMobile icon={faSignInAlt} label="logout" />
  </div>
</div>
