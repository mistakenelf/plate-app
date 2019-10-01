<script>
  import { Router } from 'svelte-routing'

  import CreatePlate from '../views/CreatePlate/CreatePlate'
  import Dashboard from '../views/Dashboard/Dashboard'

  import DefaultLayoutRoute from './components/DefaultLayoutRoute'
</script>

<Router url="">
  <DefaultLayoutRoute path="/" component={Dashboard} />
  <DefaultLayoutRoute path="/create-plate" component={CreatePlate} />
</Router>
