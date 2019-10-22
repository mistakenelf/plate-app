<script>
  import { Router } from 'svelte-routing'

  import DefaultLayoutRoute from '../components/DefaultLayoutRoute'

  import CreatePlate from './CreatePlate'
  import Dashboard from './Dashboard'
  import Login from './Login'
  import Profile from './Profile'
  import Register from './Register'
</script>

<Router url="">
  <DefaultLayoutRoute path="/" component={Dashboard} isProtected />
  <DefaultLayoutRoute path="create-plate" component={CreatePlate} />
  <DefaultLayoutRoute path="login" component={Login} />
  <DefaultLayoutRoute path="register" component={Register} />
  <DefaultLayoutRoute path="profile" component={Profile} />
</Router>
