<template>
  <div class="p-4">Dashboard</div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'

export default {
  created() {
    this.$emit('update:layout', DefaultLayout)
  }
}
</script>
