<template>
  <div class="flex items-center justify-between">
    <div class="text-3xl uppercase font-bold">{{ todoList.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    todoList: Object
  }
}
</script>
