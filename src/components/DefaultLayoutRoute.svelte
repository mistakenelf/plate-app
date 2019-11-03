<script>
  import { Route } from 'svero'

  import DefaultLayout from '../layouts/DefaultLayout'

  export let component
  export let exact
  export let path
</script>

<Route {path} {exact}>
  <DefaultLayout>
    <svelte:component this={component} />
  </DefaultLayout>
</Route>
