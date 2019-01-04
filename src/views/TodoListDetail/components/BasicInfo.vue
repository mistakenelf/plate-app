<template>
  <div>
    <h1 class="text-5xl">{{ todoList.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    todoList: Object
  }
}
</script>
