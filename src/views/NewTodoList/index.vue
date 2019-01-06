<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <ListInfo v-on:updateTitle="updateTitle" />
      <TodoListing
        :todos="todos"
        v-on:addTodo="addTodo"
        v-on:removeTodo="removeTodo"
      />
      <div
        class="fixed pin-b flex justify-between w-full items-center bg-white"
      >
        <AddTodoButton v-on:addTodo="addTodo" />
        <SaveTodoButton :loading="loading" />
      </div>
    </form>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
import ListInfo from './components/ListInfo'
import TodoListing from './components/TodoListing'
import AddTodoButton from './components/AddTodoButton'
import SaveTodoButton from './components/SaveTodoButton'
export default {
  components: {
    ListInfo,
    TodoListing,
    AddTodoButton,
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
    addTodo() {
      this.todos.push({
        description: 'Describe your todo item',
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
