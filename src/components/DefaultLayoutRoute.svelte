<script>
  import { Route } from 'svelte-routing'

  import DefaultLayout from '../layouts/DefaultLayout'

  export let component
  export let path
</script>

<Route {path}>
  <DefaultLayout>
    <svelte:component this={component} />
  </DefaultLayout>
</Route>
