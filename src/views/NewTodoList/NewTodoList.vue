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
      <NewTodo :todos="todos" :count="count" v-on:addTodo="addTodo" />
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
    todos: [],
    count: 0,
    submitSuccess: false
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
          totalTodos: this.count,
          todos: this.todos
        }
        console.log(payload)
      })
    },
    addTodo(todo) {
      this.todos.push(todo)
      this.count++
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
