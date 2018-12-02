<template>
  <div>
    <div class="p-4">
      <h1 class="mb-4">{{ todoListDetails.title }}</h1>
      <h3 class="text-dark">{{ todoListDetails.description }}</h3>
    </div>
    <div class="flex flex-row flex-wrap">
      <div
        v-for="todo in todoListDetails.todos"
        :key="todo.id"
        class="bg-grey-lighter shadow rounded w-full sm:w-full md:w-1/4 lg:w-1/5 m-2 sm:m-2 lg:m-4 p-4 flex-grow"
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
import AppLayout from '@/components/AppLayout'

export default {
  name: 'TodoListDetails',
  created() {
    this.$emit('update:layout', AppLayout)
  },
  data() {
    return {
      todoListDetails: {
        id: 1,
        title: 'Grocery List',
        description: 'Grocery list for this weekend',
        totalTodos: 1,
        todos: [
          {
            id: 1,
            name: 'Milk',
            description: 'Go get milk from Kroger',
            completed: false
          },
          {
            id: 2,
            name: 'Milk',
            description: 'Go get milk from Kroger',
            completed: true
          },
          {
            id: 3,
            name: 'Milk',
            description: 'Go get milk from Kroger',
            completed: false
          },
          {
            id: 4,
            name: 'Milk',
            description: 'Go get milk from Kroger',
            completed: false
          },
          {
            id: 5,
            name: 'Milk',
            description: 'Go get milk from Kroger',
            completed: false
          },
          {
            id: 6,
            name: 'Milk',
            description: 'Go get milk from Kroger',
            completed: true
          },
          {
            id: 7,
            name: 'Milk',
            description: 'Go get milk from Kroger',
            completed: true
          },
          {
            id: 8,
            name: 'Milk',
            description: 'Go get milk from Kroger',
            completed: true
          },
          {
            id: 9,
            name: 'Milk',
            description: 'Go get milk from Kroger',
            completed: false
          },
          {
            id: 10,
            name: 'Milk',
            description: 'Go get milk from Kroger',
            completed: true
          }
        ]
      }
    }
  }
}
</script>
