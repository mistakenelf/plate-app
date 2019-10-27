<script>
  import { fade } from 'svelte/transition'
  import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt'
  import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt'
  import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
  import { navigate } from 'svelte-routing'

  import { currentUser } from '../../../store/auth'
  import firebase from '../../../lib/firebase'
  import Icon from '../../../components/Icon'

  function signOut() {
    currentUser.set(null)
    firebase.auth().signOut()
    navigate('/login')
  }
</script>

<style>
  .container {
    position: absolute;
    z-index: 10;
    top: 45px;
    background: var(--white);
    border-radius: 3px;
    right: 0;
    box-shadow: var(--defaultShadow);
  }

  .row {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    grid-gap: 1rem;
    padding: 10px;
  }

  .menu-item {
    padding: 5px;
    border-radius: 3px;
    border: 2px solid #333;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .menu-text {
    font-size: 12px;
    text-transform: uppercase;
    margin-top: 5px;
  }
</style>

<div class="container" transition:fade={{ duration: 500 }}>
  <div class="row">
    <div class="menu-item" on:click={() => navigate('/profile')}>
      <Icon height="1.5em" width="1.5em" icon={faUserCircle} />
      <div class="menu-text">Profile</div>
    </div>
    <div class="menu-item" on:click={() => navigate('/login')}>
      <Icon height="1.5em" width="1.5em" icon={faSignInAlt} />
      <div class="menu-text">Login</div>
    </div>
    <div class="menu-item" on:click={() => signOut()}>
      <Icon height="1.5em" width="1.5em" icon={faSignOutAlt} />
      <div class="menu-text">Logout</div>
    </div>
    <div class="menu-item" on:click={() => navigate('/register')}>
      <Icon height="1.5em" width="1.5em" icon={faSignInAlt} />
      <div class="menu-text">Register</div>
    </div>
  </div>
</div>
