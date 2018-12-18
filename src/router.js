import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/Login'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ './views/Register/Register')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () =>
        import(/* webpackChunkName: "dashboard" */ './views/Dashboard/Dashboard'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/new-todo-list',
      name: 'newTodoList',
      component: () =>
        import(/* webpackChunkName: "newTodoList" */ './views/NewTodoList/NewTodoList'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/todo-lists',
      name: 'todoLists',
      component: () =>
        import(/* webpackChunkName: "todoLists" */ './views/TodoLists/TodoLists'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/todo-list/:id',
      name: 'todoList',
      component: () =>
        import(/* webpackChunkName: "todoList" */ './views/TodoList/TodoList'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    if (store.getters.isLoggedIn) {
      next({
        path: '/dashboard'
      })
    } else {
      next()
    }
  }
})

export default router
