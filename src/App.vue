<template>
  <component :is="layout"> <router-view :layout.sync="layout" /> </component>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      layout: 'div'
    }
  }
}
</script>

<style>
@import './assets/main.css';
</style>
