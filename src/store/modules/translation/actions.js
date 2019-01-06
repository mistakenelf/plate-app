import { i18n } from '@/plugins/i18n'

export default {
  loadLocale({ commit }) {
    let locale = localStorage.getItem('locale')
    if (!locale) {
      import(`@/lang/en.json`).then(msgs => {
        i18n.setLocaleMessage('en', msgs.default || msgs)
        i18n.locale = 'en'
        locale = localStorage.setItem('locale', 'en')
      })
    } else {
      import(`@/lang/${locale}.json`).then(msgs => {
        i18n.setLocaleMessage(locale, msgs.default || msgs)
        i18n.locale = locale
        localStorage.setItem('locale', locale)
      })
    }
    console.log(locale)
    commit('LOAD_LOCALE_SUCCESS', locale)
  },
  setLocale({ commit }, payload) {
    import(`@/lang/${payload.locale}.json`).then(msgs => {
      i18n.setLocaleMessage(payload.locale, msgs.default || msgs)
      i18n.locale = payload.locale
      localStorage.setItem('locale', payload.locale)
    })
    commit('SET_LOCALE_SUCCESS', payload.locale)
  }
}
