<template>
  <div class="lg:flex">
    <div class="flex-none w-64 md:max-w-xs hidden lg:block"><Sidebar /></div>
    <div class="lg:hidden"><Navbar /></div>
    <div class="lg:flex-1"><slot /></div>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default {
  async created() {
    await this.$store.dispatch('auth/getUser')
  },
  components: {
    Sidebar,
    Navbar
  }
}
</script>
