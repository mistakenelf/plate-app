<template>
  <div class="p-2 flex flex-row flex-wrap">
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="mt-4 w-full sm:w-full md:w-1/4"
    >
      <div
        class="bg-white shadow m-2 h-32 flex flex-col rounded"
        v-bind:class="{
          'opacity-50':
            todo.completed ||
            (todoLoading.loading && todoLoading.index === todos.indexOf(todo))
        }"
      >
        <div
          class="flex flex-row items-center justify-between bg-grey-darker rounded-t p-2 text-white"
        >
          <div class="text-lg truncate mr-2">{{ todo.title }}</div>
          <div class="flex items-center">
            <font-awesome-icon
              @click="$emit('toggleCompleted', todo)"
              class="text-2xl mr-4 cursor-pointer"
              icon="check-circle"
              v-bind:class="{ 'text-green-light': todo.completed }"
            />
            <font-awesome-icon
              class="text-2xl text-red-light cursor-pointer"
              icon="times"
              @click="$emit('deleteTodo', todo)"
            />
          </div>
        </div>
        <div
          class="p-2 h-16 flex items-center justify-center"
          v-if="
            todoLoading.loading && todoLoading.index === todos.indexOf(todo)
          "
        >
          <Spinner />
        </div>
        <div class="p-2 h-16" v-else>
          <div class="text-lg text-grey-darkest">{{ todo.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner'
export default {
  components: {
    Spinner
  },
  props: {
    todos: Array,
    todoLoading: Object
  }
}
</script>
