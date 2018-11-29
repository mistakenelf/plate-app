import mkdirp from 'mkdirp'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

mkdirp('db')

const adapter = new FileSync('db/db.json')

export const db = low(adapter)

db.defaults({
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
          completed: false
        },
        {
          id: 7,
          name: 'Milk',
          description: 'Go get milk from Kroger',
          completed: false
        },
        {
          id: 8,
          name: 'Milk',
          description: 'Go get milk from Kroger',
          completed: false
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
  ],
  users: []
}).write()
