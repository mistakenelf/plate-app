<script>
  import { Router, Route } from 'svero'

  import DefaultLayout from '../layouts/DefaultLayout'

  import CreatePlate from './CreatePlate'
  import Dashboard from './Dashboard'
</script>

<Router>
  <Route exact path="/">
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  </Route>
  <Route exact path="/create-plate">
    <DefaultLayout>
      <CreatePlate />
    </DefaultLayout>
  </Route>
</Router>
