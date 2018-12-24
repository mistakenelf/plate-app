<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="p-2">
        <button
          type="submit"
          class="bg-teal-dark text-white w-full p-4 hover:bg-teal focus:outline-none"
        >
          Create List
        </button>
      </div>
      <div class="flex flex-row flex-wrap justify-between p-2 md:p-0 md:m-4">
        <BasicInfo
          v-on:updateTitle="updateTitle"
          v-on:updateDescription="updateDescription"
        />
        <NewTodo :todos="todos" v-on:addTodo="addTodo" />
      </div>
      <TodoListing :todos="todos" />
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
    todos: []
  }),
  created() {
    this.$emit('update:layout', DefaultLayout)
  },
  methods: {
    handleSubmit() {
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

        this.$store.dispatch('todoList/addTodoList', payload)
        this.$router.push('/dashboard')
      })
    },
    addTodo(todo) {
      this.todos.push(todo)
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
