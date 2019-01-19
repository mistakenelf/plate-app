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
        path: 'tasks',
        name: 'tasks',
        component: load('Tasks'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'tasks/new',
        name: 'new-task',
        component: load('NewTask'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'tasks/:id',
        name: 'taskDetails',
        component: load('TaskDetails'),
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
