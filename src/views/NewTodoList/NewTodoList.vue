<template>
  <h1>New Todo List</h1>
</template>

<script>
import AppCoreLayout from '@/components/AppCoreLayout'
export default {
  name: 'NewTodoList',
  created() {
    this.$emit('update:layout', AppCoreLayout)
  }
}
</script>
