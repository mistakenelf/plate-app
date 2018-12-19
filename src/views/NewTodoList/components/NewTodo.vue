<template>
  <div class="flex flex-row flex-wrap">
    <div
      class="cursor-pointer p-2 m-2 mt-6 border-4 h-32 border-dashed border-grey flex justify-center flex-col items-center rounded w-full sm:w-full md:w-1/4 lg:w-1/5"
      @click="addNewTodo()"
    >
      <font-awesome-icon icon="plus" class="text-5xl mb-4" />
      <div class="text-xl">Add New todo</div>
    </div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="flex flex-row flex-wrap mt-4 w-full sm:w-full md:w-1/4 lg:w-1/5 flex-grow"
    >
      <div
        class="bg-white shadow p-2 m-2 h-32 flex justify-center flex-col items-center rounded w-full"
      >
        <div>{{ todo.title }}</div>
        <div>{{ todo.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    count: Number
  },
  methods: {
    addNewTodo() {
      this.$emit('addTodo', {
        title: 'New Todo',
        description: 'Todo Description',
        id: this.count
      })
    }
  }
}
</script>
