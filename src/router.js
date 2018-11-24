import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () =>
        import(/* webpackChunkName: "Login" */ './views/Login/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () =>
        import(/* webpackChunkName: "Dashboard" */ './views/Dashboard/Dashboard.vue')
    },
    {
      path: '/events-listing',
      name: 'EventsListing',
      component: () =>
        import(/* webpackChunkName: "EventsListing" */ './views/EventsListing/EventsListing.vue')
    },
    {
      path: '/todos-listing',
      name: 'TodosListing',
      component: () =>
        import(/* webpackChunkName: "TodosListing" */ './views/TodosListing/TodosListing.vue')
    },
    {
      path: '/todo-details/:id',
      name: 'TodoDetails',
      component: () =>
        import(/* webpackChunkName: "TodoDetails" */ './views/TodoDetails/TodoDetails.vue')
    },
    {
      path: '/new-todo-list',
      name: 'NewTodoList',
      component: () =>
        import(/* webpackChunkName: "NewTodoList" */ './views/NewTodoList/NewTodoList.vue')
    },
    {
      path: '/notes-listing',
      name: 'NotesListing',
      component: () =>
        import(/* webpackChunkName: "NotesListing" */ './views/NotesListing/NotesListing.vue')
    },
    {
      path: '/reminders-listing',
      name: 'RemindersListing',
      component: () =>
        import(/* webpackChunkName: "RemindersListing" */ './views/RemindersListing/RemindersListing.vue')
    }
  ]
})
