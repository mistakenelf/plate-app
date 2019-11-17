<script>
  import Navbar from './components/Navbar';
</script>

<main>
  <div class="fixed top-9 w-full">
    <Navbar />
  </div>
  <div class="pt-12 h-full">
    <slot />
  </div>
</main>
