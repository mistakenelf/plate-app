<template>
  <AppPanel title="Todos">
    <template slot="addNew">
      <router-link to="/new-todo-list" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <div
      class="border-b-2 p-4 h-16 cursor-pointer items-center hover:bg-grey-lighter"
      v-for="todoList in todoLists"
      :key="todoList.id"
      @click="goToDetailView(todoList.id)"
    >
      <div class="text-grey-black text-md">{{ todoList.title }}</div>
      <div class="text-grey-darker text-sm">{{ todoList.description }}</div>
    </div>
    <router-link
      to="/todo-lists"
      class="flex justify-center uppercase p-4 h-16 items-center text-grey-darker no-underline hover:bg-grey-lighter"
    >
      View More
    </router-link>
  </AppPanel>
</template>

<script>
import AppPanel from '@/components/AppPanel'

export default {
  name: 'TodoListsPanel',
  components: {
    AppPanel
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
              description: 'Go get milk from Kroger',
              completed: true
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
              completed: true
            },
            {
              id: 4,
              name: 'Milk',
              description: 'Go get milk from Kroger',
              completed: true
            },
            {
              id: 5,
              name: 'Milk',
              description: 'Go get milk from Kroger',
              completed: true
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
              completed: true
            },
            {
              id: 10,
              name: 'Milk',
              description: 'Go get milk from Kroger',
              completed: true
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
              description: 'Get some plates so we have something to eat off',
              completed: false
            },
            {
              id: 2,
              name: 'Utencils',
              description: 'Get some utencils so we can eat',
              completed: false
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
              description: 'Get some plates so we have something to eat off',
              completed: false
            },
            {
              id: 2,
              name: 'Utencils',
              description: 'Get some utencils so we can eat',
              completed: false
            }
          ]
        },
        {
          id: 4,
          title: 'Wish List',
          description: 'List of stuff to bring camping',
          totalTodos: 2,
          todos: [
            {
              id: 1,
              name: 'Plates',
              description: 'Get some plates so we have something to eat off',
              completed: false
            },
            {
              id: 2,
              name: 'Utencils',
              description: 'Get some utencils so we can eat',
              completed: false
            }
          ]
        },
        {
          id: 5,
          title: 'Chores',
          description: 'List of stuff to bring camping',
          totalTodos: 2,
          todos: [
            {
              id: 1,
              name: 'Plates',
              description: 'Get some plates so we have something to eat off',
              completed: false
            },
            {
              id: 2,
              name: 'Utencils',
              description: 'Get some utencils so we can eat',
              completed: false
            }
          ]
        },
        {
          id: 6,
          title: 'Woodworking',
          description: 'List of stuff to bring camping',
          totalTodos: 2,
          todos: [
            {
              id: 1,
              name: 'Plates',
              description: 'Get some plates so we have something to eat off',
              completed: false
            },
            {
              id: 2,
              name: 'Utencils',
              description: 'Get some utencils so we can eat',
              completed: false
            }
          ]
        }
      ]
    }
  },
  methods: {
    goToDetailView(id) {
      this.$router.push(`/todo-list-details/${id}`)
    }
  }
}
</script>
