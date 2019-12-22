<script>
  import netlifyIdentity from 'netlify-identity-widget';
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
  import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';

  import Icon from '../../../components/Icon';
  import { currentUser, handleLogin, handleLogout } from '../../../store/auth';

  export let isMobile;
</script>

<a
  class:text-gray-900={isMobile}
  class:text-md={isMobile}
  class:border-b-2={isMobile}
  class:mb-4={isMobile}
  class:mr-0={isMobile}
  class:pb-2={isMobile}
  class:text-sm={!isMobile}
  class="text-white font-extrabold uppercase mr-6 flex items-center"
  href="/">
  <Icon
    icon={faChartLine}
    fill={isMobile ? '#333' : '#fff'}
    width="1em"
    height="1em"
    class="mr-2" />
  Dashboard
</a>
{#if $currentUser}
  <a
    class:text-gray-900={isMobile}
    class:text-md={isMobile}
    class:border-b-2={isMobile}
    class:mb-4={isMobile}
    class:mr-0={isMobile}
    class:pb-2={isMobile}
    class:text-sm={!isMobile}
    class="text-white font-extrabold text-sm uppercase mr-6 flex items-center"
    href="/create-plate">
    <Icon
      icon={faPlusCircle}
      fill={isMobile ? '#333' : '#fff'}
      width="1em"
      height="1em"
      class="mr-2" />
    Create Plate
  </a>
{/if}
{#if !$currentUser}
  <div
    class:text-gray-900={isMobile}
    class:text-md={isMobile}
    class:border-b-2={isMobile}
    class:mb-4={isMobile}
    class:mr-0={isMobile}
    class:pb-2={isMobile}
    class:text-sm={!isMobile}
    class="text-white cursor-pointer font-extrabold text-sm uppercase mr-6 flex
    items-center"
    on:click={() => handleLogin()}>
    <Icon
      icon={faSignInAlt}
      fill={isMobile ? '#333' : '#fff'}
      width="1em"
      height="1em"
      class="mr-2" />
    Login
  </div>
  <div
    class:text-gray-900={isMobile}
    class:text-md={isMobile}
    class:border-b-2={isMobile}
    class:mb-4={isMobile}
    class:mr-0={isMobile}
    class:pb-2={isMobile}
    class:text-sm={!isMobile}
    class="text-white cursor-pointer font-extrabold text-sm uppercase mr-6 flex
    items-center"
    on:click={() => netlifyIdentity.open('signup')}>
    <Icon
      icon={faUserPlus}
      fill={isMobile ? '#333' : '#fff'}
      width="1em"
      height="1em"
      class="mr-2" />
    Sign Up
  </div>
{/if}
{#if $currentUser}
  <div
    class:text-gray-900={isMobile}
    class:text-md={isMobile}
    class:border-b-2={isMobile}
    class:mb-4={isMobile}
    class:mr-0={isMobile}
    class:pb-2={isMobile}
    class:text-sm={!isMobile}
    class="text-white cursor-pointer font-extrabold text-sm uppercase mr-6 flex
    items-center"
    on:click={() => handleLogout()}>
    <Icon
      icon={faSignInAlt}
      fill={isMobile ? '#333' : '#fff'}
      width="1em"
      height="1em"
      class="mr-2" />
    Logout
  </div>
{/if}
