<template>
  <div class="h-full fixed w-full overflow-auto pb-16">
    <TodoListsListing
      v-if="!loading && todoLists.length > 0"
      :todoLists="todoLists"
      v-on:deleteTodoList="deleteTodoList"
      v-on:openList="openList"
      :todoListLoading="todoListLoading"
      v-on:toggleCompleted="toggleCompleted"
    />
    <div v-if="loading" class="h-full flex w-full justify-center items-center">
      <Spinner />
    </div>
    <div
      v-if="todoLists.length === 0 && !loading"
      class="h-full flex w-full justify-center items-center"
    >
      <NoTodoLists />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DefaultLayout from '@/components/DefaultLayout'
import Spinner from '@/components/Spinner'
import TodoListsListing from './components/TodoListsListing'
import NoTodoLists from './components/NoTodoLists'
export default {
  components: {
    TodoListsListing,
    NoTodoLists,
    Spinner
  },
  data: () => ({
    loading: false,
    todoListLoading: {
      loading: false,
      index: 0
    }
  }),
  async created() {
    this.loading = true
    this.$emit('update:layout', DefaultLayout)
    await this.$store.dispatch('todos/getTodoLists')
    this.loading = false
  },
  computed: mapState('todos', ['todoLists']),
  methods: {
    openList(id) {
      this.$router.push(`/todo-list/${id}`)
    },
    async deleteTodoList(todoList) {
      const index = this.$store.state.todos.todoLists.indexOf(todoList)
      const payload = {
        index,
        todoList
      }
      this.todoListLoading = { loading: true, index }
      await this.$store.dispatch('todos/deleteTodoList', payload)
      this.todoLoading = { loading: false, index }
    },
    async toggleCompleted(todoList) {
      const index = this.$store.state.todos.todoLists.indexOf(todoList)
      const payload = {
        index,
        todoList
      }
      this.todoListLoading = { loading: true, index }
      await this.$store.dispatch('todos/toggleListCompleted', payload)
      this.todoListLoading = { loading: false, index }
    }
  }
}
</script>
