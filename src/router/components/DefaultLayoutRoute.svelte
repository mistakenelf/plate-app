<script>
  import { Route } from 'svelte-routing'

  import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout.svelte'

  export let path
  export let component
</script>

<Route {path}>
  <DefaultLayout>
    <svelte:component this={component} />
  </DefaultLayout>
</Route>
