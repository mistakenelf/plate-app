<script>
  import { faTh } from '@fortawesome/free-solid-svg-icons/faTh'

  import ClickOutside from '../../../components/ClickOutside'
  import Icon from '../../../components/Icon'

  import MainMenu from './MainMenu'

  let triggerEl
  let menuOpen = false

  function toggleMenu() {
    menuOpen = !menuOpen
  }

  function closeMenu() {
    menuOpen = false
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

  .menu-icon {
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
    <div
      bind:this={triggerEl}
      class="menu-icon"
      aria-label="main menu"
      role="button"
      on:click={toggleMenu}>
      <Icon width="1.5em" height="1.5em" fill="#fff" icon={faTh} />
    </div>
    {#if menuOpen}
      <ClickOutside on:clickoutside={closeMenu} exclude={[triggerEl]}>
        <MainMenu />
      </ClickOutside>
    {/if}
  </div>
</nav>
