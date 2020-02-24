<script>
  import Sidebar from './components/Sidebar';
  import MobileNav from './components/MobileNav';
</script>

<main>
  <MobileNav />
  <Sidebar />
  <div class="md:ml-48 h-full pt-12 md:pt-0">
    <slot />
  </div>
</main>
