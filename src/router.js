import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new-todo-list',
      name: 'newTodoList',
      component: () =>
        import(/* webpackChunkName: "newTodoList" */ './views/NewTodoList/NewTodoList')
    },
    {
      path: '/todo-lists',
      name: 'todoLists',
      component: () =>
        import(/* webpackChunkName: "todoLists" */ './views/TodoLists/TodoLists')
    },
    {
      path: '/todo-list/:id',
      name: 'todoList',
      component: () =>
        import(/* webpackChunkName: "todoList" */ './views/TodoList/TodoList')
    }
  ]
})
