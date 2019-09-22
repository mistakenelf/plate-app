<script>
  import { navigate } from 'svelte-routing'
  import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
  import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'

  import Icon from '../../../components/Icon'

  function handleNavigate(path) {
    navigate(path)
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

  .nav-right {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .account-icon {
    margin-right: 10px;
    cursor: pointer;
  }
</style>

<nav class="nav">
  <div class="nav-left">
    <div class="menu-container">
      <Icon height="1.5em" width="1.5em" fill="#fff" icon={faBars} />
    </div>
  </div>
  <div class="nav-right">
    <div
      class="account-icon"
      aria-label="profile"
      role="button"
      on:click={() => handleNavigate('profile')}>
      <Icon width="1.5em" height="1.5em" fill="#fff" icon={faUserCircle} />
    </div>
  </div>
</nav>
