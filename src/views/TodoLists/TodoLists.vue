<template>
  <h1>Todo Lists</h1>
</template>

<script>
import AppCoreLayout from '@/components/AppCoreLayout'
export default {
  created() {
    this.$emit('update:layout', AppCoreLayout)
  }
}
</script>
