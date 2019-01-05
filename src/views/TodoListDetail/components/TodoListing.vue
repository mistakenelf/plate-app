<template>
  <div class="p-2 flex flex-row flex-wrap pb-20">
    <div v-for="todo in todos" :key="todo.id" class="w-full sm:w-full md:w-1/4">
      <div
        class="bg-grey-lightest shadow flex flex-col rounded m-2 h-24"
        v-bind:class="{
          'opacity-50':
            todo.completed ||
            (todoLoading.loading && todoLoading.index === todos.indexOf(todo))
        }"
      >
        <div
          class="flex flex-row items-center justify-between bg-grey-darkest rounded-t px-2 py-1 text-grey-lightest"
        >
          <div class="text-lg">Todo</div>
          <div class="flex items-center">
            <font-awesome-icon
              @click="toggleCompleted(todo)"
              class="text-2xl mr-4 cursor-pointer"
              icon="check-circle"
              v-bind:class="{ 'text-green-light': todo.completed }"
            />
            <font-awesome-icon
              class="text-2xl text-red-light cursor-pointer"
              icon="times"
              @click="deleteTodo(todo)"
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
    todoList: Object
  },
  data() {
    return {
      todoLoading: {
        loading: false,
        index: 0
      }
    }
  },
  methods: {
    async deleteTodo(todo) {
      const index = this.todoList.todos.indexOf(todo)
      const payload = {
        index,
        todo
      }

      this.todoLoading = { loading: true, index }
      await this.$store.dispatch('todos/deleteTodo', payload)
      this.todoLoading = { loading: false, index }
    },

    async toggleCompleted(todo) {
      const index = this.todoList.todos.indexOf(todo)
      const payload = {
        index,
        todo
      }

      this.todoLoading = { loading: true, index }
      await this.$store.dispatch('todos/toggleTodoCompleted', payload)
      this.todoLoading = { loading: false, index }
    }
  }
}
</script>
