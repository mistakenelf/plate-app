<script>
  import { Router } from 'svelte-routing'

  import Dashboard from '../views/Dashboard/Dashboard.svelte'

  import DefaultLayoutRoute from './components/DefaultLayoutRoute.svelte'
</script>

<Router url="">
  <DefaultLayoutRoute path="/" component={Dashboard} />
</Router>
