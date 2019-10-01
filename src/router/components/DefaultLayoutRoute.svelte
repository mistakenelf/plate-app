<script>
  import { Route } from 'svelte-routing'

  import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'

  export let path
  export let component
</script>

<Route {path}>
  <DefaultLayout>
    <svelte:component this={component} />
  </DefaultLayout>
</Route>
