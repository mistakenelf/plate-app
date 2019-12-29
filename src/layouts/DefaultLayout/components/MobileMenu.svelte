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
    <NavLink href="/" icon={faChartLine} label="Dashboard" />
    <NavLink href="/create-plate" icon={faPlusCircle} label="Create Plate" />
    <NavItem icon={faSignInAlt} label="Login" />
    <NavItem icon={faUserPlus} label="Sign Up" />
    <NavItem icon={faSignInAlt} label="Logout" />
  </div>
</div>
