<template>
  <h1>Todo Lists</h1>
</template>

<script>
import AppLayout from '@/components/AppLayout'
export default {
  created() {
    this.$emit('update:layout', AppLayout)
  }
}
</script>
