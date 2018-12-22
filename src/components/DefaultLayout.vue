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
    this.$store.dispatch('auth/getUser')
  },
  components: {
    Navbar
  }
}
</script>
