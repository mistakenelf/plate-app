<template>
  <div>
    <AppNav />
    <slot />
  </div>
</template>

<script>
import AppNav from './AppNav'

export default {
  components: {
    AppNav
  }
}
</script>
