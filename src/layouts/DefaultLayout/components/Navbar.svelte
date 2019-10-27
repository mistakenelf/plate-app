<script>
  import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt'
  import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt'
  import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
  import { navigate } from 'svelte-routing'

  import firebase from '../../../lib/firebase'
  import { currentUser } from '../../../store/auth'
  import Icon from '../../../components/Icon'

  function handleNavigate(path) {
    navigate(path)
  }

  function signOut() {
    currentUser.set(null)
    firebase.auth().signOut()
    navigate('/login')
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

  .logo {
    display: flex;
    font-size: 40px;
    line-height: 40px;
    position: absolute;
    top: 3px;
  }

  .brand {
    margin-left: 10px;
    font-size: 1.7rem;
    text-transform: uppercase;
    color: var(--white);
    font-weight: 600;
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
</style>

<nav class="nav">
  <div class="nav-left">
    <div class="menu-container">
      <div class="logo">🍛</div>
    </div>
    <div class="brand">Plate</div>
  </div>
  <div class="nav-right">
    {#if $currentUser}
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
