import { useI18n } from 'vue-i18n'

export function useLocalizedSeo(titleKey, descriptionKey) {
  const { t } = useI18n()

  useHead(() => ({
    title: t(titleKey),
    meta: [
      {
        name: 'description',
        content: t(descriptionKey),
      },
    ],
  }))
}
