import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import AIDevelopment from '../views/AIDevelopment.vue'
import ThreeDPrinting from '../views/ThreeDPrinting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/ai-development',
      name: 'ai-development',
      component: AIDevelopment
    },
    {
      path: '/3d-printing',
      name: '3d-printing',
      component: ThreeDPrinting
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: () => import('../views/Imprint.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
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

export default router
