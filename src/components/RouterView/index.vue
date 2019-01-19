<template>
  <component :is="layout" class="h-full">
    <router-view :layout.sync="layout" />
  </component>
</template>

<script>
export default {
  data() {
    return {
      layout: 'div'
    }
  },
  created() {
    this.$store.dispatch('theme/setTheme')
  }
}
</script>
