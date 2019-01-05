<template>
  <div class="flex items-center justify-between">
    <h1 class="text-3xl md:text-5xl">{{ todoList.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    todoList: Object
  }
}
</script>
