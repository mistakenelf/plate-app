<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <ListInfo v-on:updateTitle="updateTitle" />
      <TodoListing
        :todos="todos"
        v-on:addTodo="addTodo"
        v-on:removeTodo="removeTodo"
      />
      <button
        type="submit"
        class="bg-teal-dark shadow-lg m-2 fixed pin-b pin-r h-16 w-16 text-white p-4 hover:bg-teal focus:outline-none rounded-full font-bold"
      >
        <font-awesome-icon
          class="text-2xl"
          :icon="!loading ? 'save' : 'spinner'"
          :spin="loading"
        />
      </button>
    </form>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
import ListInfo from './components/ListInfo'
import TodoListing from './components/TodoListing'
export default {
  components: {
    ListInfo,
    TodoListing
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
