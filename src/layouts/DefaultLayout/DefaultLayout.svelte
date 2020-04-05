<script>
  import { Route } from 'svelte-router-spa';

  import Navbar from './components/Navbar/Navbar';

  export let currentRoute;

  const params = {};
</script>

<main>
  <Navbar />
  <div class="mt-12 h-full">
    <Route {currentRoute} {params} />
  </div>
</main>
