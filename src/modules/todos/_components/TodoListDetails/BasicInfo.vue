<template>
  <div>
    <h1 class="mb-4">{{ todoList.title }}</h1>
    <h3 class="text-dark">{{ todoList.description }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    todoList: Object
  }
}
</script>
