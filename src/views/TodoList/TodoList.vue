<template>
  <div>
    <div class="p-4"><BasicInfo :todoList="todoList" /></div>
    <TodoListing v-on:deleteTodo="deleteTodo" :todos="todoList.todos" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DefaultLayout from '@/components/DefaultLayout'
import BasicInfo from './components/BasicInfo'
import TodoListing from './components/TodoListing'
export default {
  components: {
    BasicInfo,
    TodoListing
  },
  async created() {
    this.$emit('update:layout', DefaultLayout)
    await this.$store.dispatch('todoList/getTodoList', this.$route.params.id)
  },
  computed: mapState('todoList', ['todoList']),
  methods: {
    deleteTodo(todo) {
      const index = this.todoList.todos.indexOf(todo)
      const payload = {
        index,
        todo
      }
      this.$store.dispatch('todoList/deleteTodo', payload)
    }
  }
}
</script>
