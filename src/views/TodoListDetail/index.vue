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
    <AddTodoButton v-on:openModal="openModal" />
    <AddTodoModal
      :isOpen="modalOpen"
      :closeModal="closeModal"
      :todoList="todoList"
      v-on:handleClose="closeModal"
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
import AddTodoButton from './components/AddTodoButton'
export default {
  components: {
    Header,
    TodoListing,
    Spinner,
    AddTodoModal,
    AddTodoButton
  },
  data() {
    return {
      loading: false,
      todoLoading: {
        loading: false,
        index: 0
      },
      modalOpen: false
    }
  },
  computed: mapState('todos', ['todoList']),
  async created() {
    this.$emit('update:layout', DefaultLayout)

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

    openModal() {
      this.modalOpen = true
    },

    closeModal() {
      this.modalOpen = false
    }
  }
}
</script>
