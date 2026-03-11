import { watch } from 'vue'
import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import de from '@/locales/de.json'

const SUPPORTED_LOCALES = ['de', 'en']

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'de',
    fallbackLocale: 'en',
    messages: {
      en,
      de,
    },
  })

  nuxtApp.vueApp.use(i18n)

  if (import.meta.client) {
    nuxtApp.hook('app:mounted', () => {
      const savedLocale = localStorage.getItem('user-locale')
      if (savedLocale && SUPPORTED_LOCALES.includes(savedLocale)) {
        i18n.global.locale.value = savedLocale
      }

      watch(
        () => i18n.global.locale.value,
        (locale) => {
          if (SUPPORTED_LOCALES.includes(locale)) {
            localStorage.setItem('user-locale', locale)
          }
        },
        { immediate: true }
      )
    })
  }
})
