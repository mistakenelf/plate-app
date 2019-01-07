<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="flex flex-row h-12 w-full">
        <ListInfo v-on:updateTitle="updateTitle" />
        <SaveTodoButton :loading="loading" />
      </div>
      <NoTodos v-if="todos.length === 0" />
      <TodoListing
        :todos="todos"
        v-else
        v-on:addTodo="addTodo"
        v-on:removeTodo="removeTodo"
      />
      <div
        class="fixed pin-b flex justify-between w-full items-center bg-white"
      >
        <NewTodo v-on:addTodo="addTodo" />
      </div>
    </form>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
import ListInfo from './components/ListInfo'
import TodoListing from './components/TodoListing'
import NewTodo from './components/NewTodo'
import NoTodos from './components/NoTodos'
import SaveTodoButton from './components/SaveTodoButton'
export default {
  components: {
    ListInfo,
    TodoListing,
    NewTodo,
    NoTodos,
    SaveTodoButton
  },
  data() {
    return {
      title: '',
      todos: [],
      loading: false,
      count: 0
    }
  },
  created() {
    this.$emit('update:layout', DefaultLayout)
  },
  methods: {
    async handleSubmit() {
      this.$validator.validateAll().then(async result => {
        if (!result) {
          return
        }

        const payload = {
          title: this.title,
          todos: this.todos,
          createdBy: this.$store.state.auth.user.id
        }

        this.loading = true
        await this.$store.dispatch('todos/addTodoList', payload)
        this.loading = false

        this.$router.push('/dashboard')
      })
    },
    addTodo(description) {
      this.todos.push({
        description,
        createdBy: this.$store.state.auth.user.id,
        index: this.count++
      })
    },
    removeTodo(todo) {
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },
    updateTitle(title) {
      this.title = title
    }
  }
}
</script>
