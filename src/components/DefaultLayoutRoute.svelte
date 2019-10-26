<script>
  import { Route } from 'svelte-routing'

  import { currentUser } from '../store/auth'
  import DefaultLayout from '../layouts/DefaultLayout'

  export let path
  export let component
  export let isProtected
</script>

<Route {path}>
  <DefaultLayout>
    <svelte:component this={component} />
  </DefaultLayout>
</Route>
