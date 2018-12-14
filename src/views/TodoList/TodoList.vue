<template>
  <div>
    <div class="p-4">
      <h1 class="mb-4">{{ todoList.title }}</h1>
      <h3 class="text-dark">{{ todoList.description }}</h3>
    </div>
    <div class="flex flex-row flex-wrap">
      <div
        v-for="todo in todoList.todos"
        :key="todo.id"
        class="bg-white shadow rounded w-full sm:w-full md:w-1/4 lg:w-1/5 m-2 sm:m-2 lg:m-4 p-4 flex-grow"
      >
        <div class="flex justify-between items-center">
          <div class="flex flex-col">
            <div class="text-xl font-bold">{{ todo.name }}</div>
            <div>{{ todo.description }}</div>
          </div>
          <font-awesome-icon
            icon="check-circle"
            :class="todo.completed ? 'text-green' : 'text-grey-darker'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DefaultLayout from '@/components/DefaultLayout'
export default {
  created() {
    this.$emit('update:layout', DefaultLayout)
  },
  mounted() {
    this.$store.dispatch('getTodoList', this.$route.params.id)
  },
  computed: mapState(['todoList'])
}
</script>
