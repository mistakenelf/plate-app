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
      <div class="flex flex-row justify-between items-center flex-wrap p-4">
        <div class="w-full sm:w-full md:w-1/2">
          <BasicInfo
            v-on:updateTitle="updateTitle"
            v-on:updateDescription="updateDescription"
          />
        </div>
        <div class="w-full sm:w-full md:w-1/2">
          <NewTodoButton v-on:openModal="openModal" />
        </div>
      </div>
      <NewTodoModal
        v-on:addTodo="addTodo"
        :closeModal="closeModal"
        v-on:close="closeModal"
        :isOpen="isOpen"
      />
      <TodoListing :todos="todos" v-on:removeTodo="removeTodo" />
    </form>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
import BasicInfo from '../_components/NewTodoList/BasicInfo'
import NewTodoButton from '../_components/NewTodoList/NewTodoButton'
import TodoListing from '../_components/NewTodoList/TodoListing'
import NewTodoModal from '../_components/NewTodoList/NewTodoModal'
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
