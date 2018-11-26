<template>
  <div>
    <app-nav />
    <slot />
  </div>
</template>

<script>
import AppNav from './AppNav'
export default {
  components: {
    'app-nav': AppNav
  }
}
</script>
