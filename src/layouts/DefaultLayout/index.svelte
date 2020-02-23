<script>
  import Navbar from './components/Navbar';
  import Sidebar from './components/Sidebar';
</script>

<main>
  <Navbar />
  <Sidebar />
  <div class="md:ml-16">
    <slot />
  </div>
</main>
