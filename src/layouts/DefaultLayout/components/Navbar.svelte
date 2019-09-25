<script>
  import { navigate } from 'svelte-routing'
  import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
  import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt'
  import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt'

  import Icon from '../../../components/Icon'
  import firebase, { app, loggedIn$ } from '../../../lib/firebase'

  const user = loggedIn$

  function handleNavigate(path) {
    navigate(path)
  }

  function signIn() {
    const authProvider = new firebase.auth.GoogleAuthProvider()
    app.auth().signInWithPopup(authProvider)
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
    background-color: plum;
    position: fixed;
    z-index: 10;
  }

  .nav-left {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .menu-container {
    width: 90px;
    background: purple;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>

<nav class="nav">
  <div class="nav-left">
    <div class="menu-container">
      <Icon height="1.5em" width="1.5em" fill="#fff" icon={faBars} />
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
      <div class="nav-icon" aria-label="login" role="button" on:click={signIn}>
        <Icon width="1.5em" height="1.5em" fill="#fff" icon={faSignInAlt} />
      </div>
    {/if}
  </div>
</nav>
