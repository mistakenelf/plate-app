<script>
  import Navbar from './components/Navbar'
  import Sidebar from './components/Sidebar'
</script>

<style>
  .navbar-container {
    position: fixed;
    top: 0;
    width: 100%;
  }
  .sidebar-container {
    position: fixed;
    left: 0;
    height: 100%;
    top: 55px;
  }

  .content-container {
    position: fixed;
    left: 90px;
    top: 55px;
    height: 100%;
    width: 100%;
    overflow: auto;
  }
</style>

<main>
  <div class="navbar-container">
    <Navbar />
  </div>
  <div class="sidebar-container">
    <Sidebar />
  </div>
  <div class="content-container">
    <slot />
  </div>
</main>
