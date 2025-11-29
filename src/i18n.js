import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'

const savedLocale = localStorage.getItem('user-locale')
const defaultLocale = savedLocale || 'de'

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: defaultLocale, // Default locale
  fallbackLocale: 'en',
  messages: {
    en,
    de
  }
})

export default i18n
