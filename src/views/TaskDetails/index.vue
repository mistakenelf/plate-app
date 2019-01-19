<template>
  <div>Task Details</div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
export default {
  created() {
    this.$emit('update:layout', DefaultLayout)
  }
}
</script>
