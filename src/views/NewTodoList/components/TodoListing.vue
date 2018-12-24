<template>
  <div class="flex flex-row flex-wrap">
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="mt-4 w-full sm:w-full md:w-1/4"
    >
      <div class="bg-white shadow p-4 m-2 h-32 flex flex-col rounded">
        <div class="text-4xl">{{ todo.title }}</div>
        <div class="text-2xl">{{ todo.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array
  }
}
</script>
