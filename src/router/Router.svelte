<script>
  import { Router } from 'svelte-routing'

  import CreatePlate from '../views/CreatePlate'
  import Dashboard from '../views/Dashboard'
  import Login from '../views/Login'
  import Register from '../views/Register'
  import Profile from '../views/Profile'

  import DefaultLayoutRoute from './DefaultLayoutRoute'
</script>

<Router url="">
  <DefaultLayoutRoute path="/" component={Dashboard} />
  <DefaultLayoutRoute path="create-plate" component={CreatePlate} />
  <DefaultLayoutRoute path="login" component={Login} />
  <DefaultLayoutRoute path="register" component={Register} />
  <DefaultLayoutRoute path="profile" component={Profile} />
</Router>
