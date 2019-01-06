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
    await this.$store.dispatch('theme/setTheme')
    await this.$store.dispatch('translation/loadLocale')
  },
  components: {
    Navbar
  }
}
</script>
