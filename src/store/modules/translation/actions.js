import { i18n } from '@/plugins/i18n'

export default {
  getLocale({ commit }) {
    commit('GET_LOCALE_SUCCESS', i18n.locale)
  },
  setLocale({ commit }, payload) {
    i18n.locale = payload.locale
    commit('SET_LOCALE_SUCCESS', payload.locale)
  }
}
