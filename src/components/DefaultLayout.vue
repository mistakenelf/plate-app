<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
