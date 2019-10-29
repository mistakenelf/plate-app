<script>
  import { Router } from 'svelte-routing'

  import DefaultLayoutRoute from '../components/DefaultLayoutRoute'

  import CreatePlate from './CreatePlate'
  import Dashboard from './Dashboard'
</script>

<Router url="">
  <DefaultLayoutRoute path="/" component={Dashboard} />
  <DefaultLayoutRoute path="create-plate" component={CreatePlate} />
</Router>
