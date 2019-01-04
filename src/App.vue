<template>
  <component :is="layout" class="h-full">
    <router-view :layout.sync="layout" />
  </component>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      layout: 'div'
    }
  },
  created() {
    this.$store.dispatch('theme/setTheme', { theme: 'light' })
  }
}
</script>

<style>
@import './assets/main.css';
</style>
