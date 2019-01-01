<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="p-4">
        <BasicInfo
          v-on:updateTitle="updateTitle"
          v-on:updateDescription="updateDescription"
        />
      </div>
      <NewTodoModal
        v-on:addTodo="addTodo"
        :closeModal="closeModal"
        v-on:close="closeModal"
        :isOpen="isOpen"
      />
      <NewTodoButton v-on:openModal="openModal" />
      <TodoListing :todos="todos" v-on:removeTodo="removeTodo" />
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
import BasicInfo from './components/BasicInfo'
import NewTodoButton from './components/NewTodoButton'
import TodoListing from './components/TodoListing'
import NewTodoModal from './components/NewTodoModal'
export default {
  components: {
    BasicInfo,
    NewTodoButton,
    TodoListing,
    NewTodoModal
  },
  data() {
    return {
      title: '',
      description: '',
      todos: [],
      loading: false,
      isOpen: false
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
    },
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    }
  }
}
</script>
