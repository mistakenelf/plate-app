import RouterView from '@/components/RouterView'
import { Trans } from '@/plugins/translation'

function load(component) {
  return () =>
    import(/* webpackChunkName: "[request]" */ `@/views/${component}/index.vue`)
}

export default [
  {
    path: '/:lang',
    component: RouterView,
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'login',
        component: load('Login')
      },
      {
        path: 'register',
        name: 'register',
        component: load('Register')
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: load('Dashboard'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'todo-lists',
        name: 'todo-lists',
        component: load('TodoLists'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'todo-lists/new',
        name: 'new-todo-list',
        component: load('NewTodoList'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'todo-lists/:id',
        name: 'todo-list',
        component: load('TodoListDetail'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'notes/new',
        name: 'new-note',
        component: load('NewNote'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '*',
    redirect() {
      return Trans.getUserSupportedLang()
    }
  }
]
