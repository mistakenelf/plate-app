<template>
  <div class="h-full fixed w-full overflow-auto pb-16">
    <div v-if="loading" class="h-full flex w-full justify-center items-center">
      <Spinner />
    </div>
    <div v-else>
      <div class="p-4"><BasicInfo :todoList="todoList" /></div>
      <TodoListing
        v-on:deleteTodo="deleteTodo"
        v-on:toggleCompleted="toggleCompleted"
        :todos="todoList.todos"
        :todoLoading="todoLoading"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DefaultLayout from '@/components/DefaultLayout'
import BasicInfo from './components/BasicInfo'
import TodoListing from './components/TodoListing'
import Spinner from '@/components/Spinner'
export default {
  components: {
    BasicInfo,
    TodoListing,
    Spinner
  },
  data: () => ({
    loading: false,
    todoLoading: {
      loading: false,
      index: 0
    }
  }),
  async created() {
    this.loading = true
    this.$emit('update:layout', DefaultLayout)
    await this.$store.dispatch('todoList/getTodoList', this.$route.params.id)
    this.loading = false
  },
  computed: mapState('todoList', ['todoList']),
  methods: {
    async deleteTodo(todo) {
      const index = this.todoList.todos.indexOf(todo)
      const payload = {
        index,
        todo
      }
      this.todoLoading = { loading: true, index }
      await this.$store.dispatch('todoList/deleteTodo', payload)
      this.todoLoading = { loading: false, index }
    },
    async toggleCompleted(todo) {
      const index = this.todoList.todos.indexOf(todo)
      const payload = {
        index,
        todo
      }
      this.todoLoading = { loading: true, index }
      await this.$store.dispatch('todoList/toggleTodoCompleted', payload)
      this.todoLoading = { loading: false, index }
    }
  }
}
</script>
