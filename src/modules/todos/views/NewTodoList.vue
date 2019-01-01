<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="p-4">
        <button
          type="submit"
          class="bg-teal-dark text-white w-full p-4 hover:bg-teal focus:outline-none rounded border-b-4 border-teal-darker font-bold"
        >
          {{ loading ? 'loading...' : 'Create List' }}
        </button>
      </div>
      <BasicInfo
        v-on:updateTitle="updateTitle"
        v-on:updateDescription="updateDescription"
      />
      <Divider />
      <NewTodo :todos="todos" v-on:addTodo="addTodo" />
      <TodoListing :todos="todos" v-on:removeTodo="removeTodo" />
    </form>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
import Divider from '@/components/Divider'
import BasicInfo from '../_components/NewTodoList/BasicInfo'
import NewTodo from '../_components/NewTodoList/NewTodo'
import TodoListing from '../_components/NewTodoList/TodoListing'
export default {
  components: {
    Divider,
    BasicInfo,
    NewTodo,
    TodoListing
  },
  data() {
    return {
      title: '',
      description: '',
      todos: [],
      loading: false
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
          description: this.description,
          todos: this.todos,
          createdBy: this.$store.state.auth.user.id
        }

        this.loading = true
        await this.$store.dispatch('todos/addTodoList', payload)
        this.loading = false

        this.$router.push('/dashboard')
      })
    },
    addTodo(todo) {
      this.todos.push(todo)
    },
    removeTodo(todo) {
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },
    updateTitle(title) {
      this.title = title
    },
    updateDescription(description) {
      this.description = description
    }
  }
}
</script>
