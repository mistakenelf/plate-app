import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/lang/en.json'
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from '@/constants/lang'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: { en }
})
