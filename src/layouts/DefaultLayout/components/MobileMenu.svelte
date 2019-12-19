<script>
  import { slide } from 'svelte/transition';
  import { faChartLine } from '@fortawesome/free-solid-svg-icons/faChartLine';
  import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
  import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
  import netlifyIdentity from 'netlify-identity-widget';

  import { currentUser, handleLogin, handleLogout } from '../../../store/auth';
  import Icon from '../../../components/Icon';
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
    <a
      class="font-extrabold text-md uppercase mb-4 flex items-center border-b-2
      pb-2"
      href="/">
      <Icon
        icon={faChartLine}
        fill="#333"
        width="1em"
        height="1em"
        class="mr-2" />
      Dashboard
    </a>
    {#if $currentUser}
      <a
        class="font-extrabold text-md uppercase mb-4 pb-2 border-b-2 flex
        items-center"
        href="/create-plate">
        <Icon
          icon={faPlusCircle}
          fill="#333"
          width="1em"
          height="1em"
          class="mr-2" />
        Create Plate
      </a>
    {/if}
    {#if !$currentUser}
      <div
        class="cursor-pointer font-extrabold text-md uppercase mb-4 pb-2
        border-b-2 flex items-center"
        on:click={() => handleLogin()}>
        <Icon
          icon={faSignInAlt}
          fill="#333"
          width="1em"
          height="1em"
          class="mr-2" />
        Login
      </div>
      <div
        class="cursor-pointer font-extrabold text-md uppercase flex items-center"
        on:click={() => netlifyIdentity.open('signup')}>
        <Icon
          icon={faUserPlus}
          fill="#333"
          width="1em"
          height="1em"
          class="mr-2" />
        Sign Up
      </div>
    {/if}
    {#if $currentUser}
      <div
        class="cursor-pointer font-extrabold text-md uppercase flex items-center"
        on:click={() => handleLogout()}>
        <Icon
          icon={faSignInAlt}
          fill="#333"
          width="1em"
          height="1em"
          class="mr-2" />
        Logout
      </div>
    {/if}
  </div>
</div>
