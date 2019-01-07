<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  async created() {
    await this.$store.dispatch('auth/getUser')
  },
  components: {
    Navbar
  }
}
</script>
