<template>
  <h1>New Todo List</h1>
</template>

<script>
import AppLayout from '@/components/AppLayout'
export default {
  name: 'NewTodoList',
  created() {
    this.$emit('update:layout', AppLayout)
  }
}
</script>
