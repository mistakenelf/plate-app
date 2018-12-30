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
      <div class="m-4 border-b-4 border-dashed border-grey-darker" />
      <NewTodo :todos="todos" v-on:addTodo="addTodo" />
      <div class="m-4 border-b-4 border-dashed border-grey-darker" />
      <TodoListing :todos="todos" v-on:removeTodo="removeTodo" />
    </form>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
import BasicInfo from './components/BasicInfo'
import NewTodo from './components/NewTodo'
import TodoListing from './components/TodoListing'
export default {
  components: {
    BasicInfo,
    NewTodo,
    TodoListing
  },
  data: () => ({
    title: '',
    description: '',
    todos: [],
    loading: false
  }),
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
