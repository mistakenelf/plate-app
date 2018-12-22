<template>
  <div>
    <form class="p-2" @submit.prevent="handleSubmit">
      <button
        type="submit"
        class="bg-teal-dark text-white w-full p-4 mb-4 hover:bg-teal focus:outline-none"
      >
        Create List
      </button>
      <BasicInfo
        v-on:updateTitle="updateTitle"
        v-on:updateDescription="updateDescription"
      />
      <NewTodo :todos="todos" v-on:addTodo="addTodo" />
    </form>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
import BasicInfo from './components/BasicInfo'
import NewTodo from './components/NewTodo'
export default {
  components: {
    BasicInfo,
    NewTodo
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
          todos: this.todos
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
