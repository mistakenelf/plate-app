import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () =>
        import(/* webpackChunkName: "dashboard" */ './views/Dashboard/Dashboard')
    },
    {
      path: '/todo-lists',
      name: 'todoLists',
      component: () =>
        import(/* webpackChunkName: "todoLists" */ './views/TodoLists/TodoLists')
    }
  ]
})
