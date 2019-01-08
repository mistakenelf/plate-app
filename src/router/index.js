import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'
import { i18n } from '@/plugins/i18n'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { x: 0, y: 0 }
  },
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.getters['auth/isLoggedIn']) {
      next()
    } else {
      next({
        path: `/${i18n.locale}}`
      })
    }
  } else {
    if (store.getters['auth/isLoggedIn']) {
      next({
        path: `/${i18n.locale}/dashboard`
      })
    } else {
      next()
    }
  }
})

export default router
