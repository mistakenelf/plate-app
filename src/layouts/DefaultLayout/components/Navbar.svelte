<script>
  import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'

  import Icon from '../../../components/Icon'
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
</style>

<nav class="nav">
  <div class="nav-left">
    <div class="menu-container">
      <Icon fill="#fff" icon={faBars} />
    </div>
    <div>profile</div>
    <div>search</div>
  </div>
  <div class="nav-right">
    <div>my account</div>
  </div>
</nav>
