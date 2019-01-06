<template>
  <div><slot /></div>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch('theme/setTheme')
    await this.$store.dispatch('translation/loadLocale')
  }
}
</script>
