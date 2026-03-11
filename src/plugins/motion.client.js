import { MotionPlugin } from '@vueuse/motion'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MotionPlugin, {
    directives: {
      'slide-visible-once-bottom': {
        initial: {
          y: 100,
          opacity: 0,
        },
        visibleOnce: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 200,
            ease: 'easeOut',
          },
        },
      },
    },
  })
})
