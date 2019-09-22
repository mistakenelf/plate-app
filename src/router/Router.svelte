<script>
  import { Router } from 'svelte-routing'

  import Home from '../views/Home/Home.svelte'

  import DefaultLayoutRoute from './components/DefaultLayoutRoute.svelte'
</script>

<Router url="">
  <DefaultLayoutRoute path="/" component={Home} />
</Router>
