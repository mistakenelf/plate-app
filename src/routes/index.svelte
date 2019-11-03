<script>
  import { Router } from 'svero'

  import DefaultLayoutRoute from '../components/DefaultLayoutRoute'

  import CreatePlate from './CreatePlate'
  import Dashboard from './Dashboard'
</script>

<Router>
  <DefaultLayoutRoute exact path="/" component={Dashboard} />
  <DefaultLayoutRoute exact path="/create-plate" component={CreatePlate} />
</Router>
