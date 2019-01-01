import Vue from 'vue'
import Router from 'vue-router'
import Login from './modules/auth/views/Login'
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
        import(/* webpackChunkName: "register" */ './modules/auth/views/Register')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () =>
        import(/* webpackChunkName: "dashboard" */ './modules/dashboard/views/Dashboard'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/todo-lists',
      name: 'todoLists',
      component: () =>
        import(/* webpackChunkName: "todoLists" */ './modules/todos/views/TodoListListing'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/todo-lists/new',
      name: 'newTodoList',
      component: () =>
        import(/* webpackChunkName: "newTodoList" */ './modules/todos/views/NewTodoList'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/todo-lists/:id',
      name: 'todoList',
      component: () =>
        import(/* webpackChunkName: "todoList" */ './modules/todos/views/TodoListDetails'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLoggedIn']) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    if (store.getters['auth/isLoggedIn']) {
      next({
        path: '/dashboard'
      })
    } else {
      next()
    }
  }
})

export default router
