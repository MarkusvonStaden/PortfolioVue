export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('motion-slide-visible-once-bottom', {
    getSSRProps: () => ({}),
  })
})
