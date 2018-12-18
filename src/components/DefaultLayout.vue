<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  created() {
    this.$store.dispatch('getUser')
  },
  components: {
    Navbar
  }
}
</script>
