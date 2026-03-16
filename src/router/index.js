import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import AIDevelopment from '../views/AIDevelopment.vue'
import ThreeDPrinting from '../views/ThreeDPrinting.vue'
import i18n from '../i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        titleKey: 'meta.home.title',
        descKey: 'meta.home.description'
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
      meta: {
        titleKey: 'meta.portfolio.title',
        descKey: 'meta.portfolio.description'
      }
    },
    {
      path: '/ai-development',
      name: 'ai-development',
      component: AIDevelopment,
      meta: {
        titleKey: 'meta.ai_development.title',
        descKey: 'meta.ai_development.description'
      }
    },
    {
      path: '/3d-printing',
      name: '3d-printing',
      component: ThreeDPrinting,
      meta: {
        titleKey: 'meta.three_d_printing.title',
        descKey: 'meta.three_d_printing.description'
      }
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: () => import('../views/Imprint.vue'),
      meta: {
        titleKey: 'meta.imprint.title',
        descKey: 'meta.imprint.description'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      meta: {
        titleKey: 'meta.contact.title',
        descKey: 'meta.contact.description'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const titleKey = to.meta.titleKey
  const descKey = to.meta.descKey

  if (titleKey) {
    document.title = i18n.global.t(titleKey)
  }

  if (descKey) {
    const desc = i18n.global.t(descKey)
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = "description"
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', desc)
  }

  next()
})

export default router
