<script>
  import { onMount } from 'svelte'
  import { Route, navigate } from 'svelte-routing'

  import { currentUser } from '../store/auth'
  import DefaultLayout from '../layouts/DefaultLayout'

  export let path
  export let component
  export let isProtected

  onMount(() => {
    if (isProtected & $currentUser && !$currentUser.uid) {
      navigate('/login')
    }
  })
</script>

<Route {path}>
  <DefaultLayout>
    <svelte:component this={component} />
  </DefaultLayout>
</Route>
