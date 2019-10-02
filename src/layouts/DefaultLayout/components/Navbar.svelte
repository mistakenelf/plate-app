<script>
  import { createEventDispatcher } from 'svelte'
  import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt'
  import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt'
  import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
  import { navigate } from 'svelte-routing'

  import firebase, { loggedIn$ } from '../../../lib/firebase'
  import Icon from '../../../components/Icon'

  const dispatch = createEventDispatcher()

  const user = loggedIn$

  function handleNavigate(path) {
    navigate(path)
  }

  async function signOut() {
    await firebase.auth().signOut()
  }
</script>

<style>
  .nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height: 55px;
    background-color: var(--primary);
    position: fixed;
    z-index: 10;
    left: 0;
  }

  .nav-left {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .menu-container {
    width: 70px;
    background: var(--secondary);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hamburger-menu {
    display: flex;
  }

  .logo {
    display: none;
  }

  .brand {
    margin-left: 10px;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: var(--white);
  }

  .nav-right {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .nav-icon {
    margin-right: 10px;
    cursor: pointer;
  }

  @media only screen and (min-width: 992px) {
    .hamburger-menu {
      display: none;
    }

    .logo {
      display: flex;
      font-size: 40px;
      line-height: 40px;
      position: absolute;
      top: 3px;
    }
  }
</style>

<nav class="nav">
  <div class="nav-left">
    <div class="menu-container">
      <div class="hamburger-menu">
        <Icon
          on:click={() => dispatch('toggleSidebar')}
          height="1.5em"
          width="1.5em"
          fill="#fff"
          icon={faBars} />
      </div>
      <div class="logo">🍛</div>
    </div>
    <div class="brand">Plate</div>
  </div>
  <div class="nav-right">
    {#if $user}
      <div
        class="nav-icon"
        aria-label="profile"
        role="button"
        on:click={() => handleNavigate('profile')}>
        <Icon width="1.5em" height="1.5em" fill="#fff" icon={faUserCircle} />
      </div>
      <div
        class="nav-icon"
        aria-label="logout"
        role="button"
        on:click={() => signOut()}>
        <Icon width="1.5em" height="1.5em" fill="#fff" icon={faSignOutAlt} />
      </div>
    {:else}
      <div
        class="nav-icon"
        aria-label="login"
        role="button"
        on:click={() => handleNavigate('login')}>
        <Icon width="1.5em" height="1.5em" fill="#fff" icon={faSignInAlt} />
      </div>
    {/if}
  </div>
</nav>
