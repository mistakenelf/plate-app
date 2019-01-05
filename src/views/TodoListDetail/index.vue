<template>
  <div class="h-full fixed w-full overflow-auto pb-16">
    <div v-if="loading" class="h-full flex w-full justify-center items-center">
      <Spinner />
    </div>
    <div v-else>
      <div class="p-4">
        <Header :todoList="todoList" v-on:openModal="openModal" />
      </div>
      <TodoListing
        v-on:deleteTodo="deleteTodo"
        v-on:toggleCompleted="toggleCompleted"
        :todos="todoList.todos"
        :todoLoading="todoLoading"
      />
    </div>
    <AddTodoModal
      :isOpen="modalOpen"
      :closeModal="closeModal"
      v-on:addTodo="addTodo"
      :addingTodo="addingTodo"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DefaultLayout from '@/components/DefaultLayout'
import Header from './components/Header'
import TodoListing from './components/TodoListing'
import Spinner from '@/components/Spinner'
import AddTodoModal from './components/AddTodoModal'
export default {
  components: {
    Header,
    TodoListing,
    Spinner,
    AddTodoModal
  },
  data() {
    return {
      loading: false,
      todoLoading: {
        loading: false,
        index: 0
      },
      modalOpen: false,
      addingTodo: false
    }
  },
  computed: mapState('todos', ['todoList']),
  created() {
    this.$emit('update:layout', DefaultLayout)
  },
  async mounted() {
    this.loading = true
    await this.$store.dispatch('todos/getTodoList', this.$route.params.id)
    this.loading = false
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
    },
    async addTodo(description) {
      const payload = {
        ...this.todoList,
        todos: [
          ...this.todoList.todos,
          {
            description
          }
        ]
      }

      this.addingTodo = true
      await this.$store.dispatch('todos/updateTodoList', payload)
      this.addingTodo = false
      this.modalOpen = false
    },
    openModal() {
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
    }
  }
}
</script>
