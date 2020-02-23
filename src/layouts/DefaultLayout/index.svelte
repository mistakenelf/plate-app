<script>
  import Sidebar from './components/Sidebar';
</script>

<main>
  <Sidebar />
  <div class="md:ml-48 h-full">
    <slot />
  </div>
</main>
