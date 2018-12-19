<template>
  <form class="p-2" @submit.prevent="handleSubmit">
    <button type="submit" class="bg-teal-dark text-white w-full p-4 mb-4">
      Create List
    </button>
    <BasicInfo />
    <NewTodo :todos="todos" :count="count" v-on:addTodo="addTodo" />
  </form>
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
    count: 0
  }),
  created() {
    this.$emit('update:layout', DefaultLayout)
  },
  methods: {
    handleSubmit() {
      this.$children.forEach(vm => {
        vm.$validator
          .validateAll()
          .then(result => {
            console.log(vm.$el.nodeValue)
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
          .catch(err => {
            console.log('error: ' + err)
          })
      })
    },
    addTodo(todo) {
      this.todos.push(todo)
      this.count++
    }
  }
}
</script>
