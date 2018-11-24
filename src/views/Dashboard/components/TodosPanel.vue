<template>
  <app-panel title="Todo List's" class="w-full">
    <template slot="extra">
      <router-link class="text-white" :to="`/new-todo-list`">
        <font-awesome-icon
          class="text-2xl cursor-pointer text-darker"
          icon="plus"
        />
      </router-link>
    </template>
    <div
      class="border-b-2 p-4 h-16 cursor-pointer items-center hover:bg-grey-lighter"
      v-for="todoList in todoLists"
      :key="todoList.id"
      v-on:click="goToDetail(todoList.id)"
    >
      <div class="text-grey-black text-md">{{ todoList.title }}</div>
      <div class="text-grey-darker text-sm">{{ todoList.description }}</div>
    </div>
    <router-link
      class="flex justify-center h-16 items-center p-4 uppercase text-grey-darker no-underline"
      :to="`/todos-listing`"
      >View More</router-link
    >
  </app-panel>
</template>

<script>
import AppPanel from '@/components/AppPanel'
export default {
  components: {
    'app-panel': AppPanel
  },
  data() {
    return {
      todoLists: [
        {
          id: 1,
          title: 'Grocery List',
          description: 'Grocery list for this weekend',
          totalTodos: 1,
          todos: [
            {
              id: 1,
              name: 'Milk',
              description: 'Go get milk from Kroger'
            }
          ]
        },
        {
          id: 2,
          title: 'Camping list',
          description: 'List of stuff to bring camping',
          totalTodos: 2,
          todos: [
            {
              id: 1,
              name: 'Plates',
              description: 'Get some plates so we have something to eat off'
            },
            {
              id: 2,
              name: 'Utencils',
              description: 'Get some utencils so we can eat'
            }
          ]
        },
        {
          id: 3,
          title: 'Extra list',
          description: 'List of stuff to bring camping',
          totalTodos: 2,
          todos: [
            {
              id: 1,
              name: 'Plates',
              description: 'Get some plates so we have something to eat off'
            },
            {
              id: 2,
              name: 'Utencils',
              description: 'Get some utencils so we can eat'
            }
          ]
        }
      ]
    }
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/todo-details/${id}`)
    }
  }
}
</script>
