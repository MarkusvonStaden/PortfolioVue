import { MotionPlugin } from '@vueuse/motion'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MotionPlugin, {
    directives: {
      'slide-visible-once-bottom': {
        initial: {
          y: 16,
          opacity: 0,
        },
        visibleOnce: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 350,
            ease: 'easeOut',
          },
        },
      },
    },
  })
})
