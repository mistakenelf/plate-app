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
    position: fixed;
    top: 55px;
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  @media only screen and (min-width: 992px) {
    .content-container {
      position: fixed;
      top: 55px;
      height: 100%;
      width: 100%;
      overflow: auto;
    }
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
