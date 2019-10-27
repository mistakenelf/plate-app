<script>
  import Navbar from './components/Navbar'
</script>

<style>
  .navbar-container {
    position: fixed;
    top: 0;
    width: 100%;
  }

  .content-container {
    padding-top: 55px;
    height: 100%;
  }
</style>

<main>
  <div class="navbar-container">
    <Navbar />
  </div>
  <div class="content-container">
    <slot />
  </div>
</main>
