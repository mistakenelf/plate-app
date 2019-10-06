<script>
  import Navbar from './Navbar'
  import Sidebar from './Sidebar'

  let sidebarOpen = false

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen
  }
</script>

<style>
  .navbar-container {
    position: fixed;
    top: 0;
    width: 100%;
  }

  .sidebar-container {
    display: none;
  }

  .content-container {
    position: fixed;
    top: 55px;
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  @media only screen and (min-width: 992px) {
    .sidebar-container {
      position: fixed;
      left: 0;
      height: 100%;
      top: 55px;
      display: initial;
    }

    .content-container {
      position: fixed;
      left: 70px;
      top: 55px;
      height: 100%;
      width: 100%;
      overflow: auto;
    }
  }
</style>

<main>
  <div class="navbar-container">
    <Navbar on:toggleSidebar={toggleSidebar} />
  </div>
  <div class="sidebar-container">
    <Sidebar />
  </div>
  {#if sidebarOpen}
    <Sidebar />
  {/if}
  <div class="content-container">
    <slot />
  </div>
</main>
