import { createApp } from 'vue'
import './index.css'
import '@fontsource/space-grotesk'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(MotionPlugin, {
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
app.mount('#app')
