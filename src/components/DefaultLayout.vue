<template>
  <div>
    <div class="fixed pin-l hidden lg:block w-64 h-full"><Sidebar /></div>
    <div class="lg:hidden"><Navbar /></div>
    <div class="ml-0 lg:ml-64"><slot /></div>
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
