<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'AI Development', href: '/ai-development' },
  { name: '3D Printing', href: '/3d-printing' },
]
</script>

<template>
  <header class="fixed w-full top-0 z-50 transition-all duration-300 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
    <nav class="container mx-auto px-6 h-20 flex items-center justify-between" aria-label="Global">
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5 text-2xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Markus von Staden
        </RouterLink>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink 
          v-for="item in navigation" 
          :key="item.name" 
          :to="item.href" 
          class="text-sm font-medium leading-6 transition-colors duration-200 hover:text-primary"
          :class="[route.path === item.href ? 'text-primary' : 'text-slate-300']"
        >
          {{ item.name }}
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex lg:hidden">
        <button 
          type="button" 
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300 hover:text-white"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span class="sr-only">Open main menu</span>
          <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 z-[100] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10" style="background-color: #0f172a;">
      <div class="flex items-center justify-between">
        <RouterLink to="/" class="-m-1.5 p-1.5 text-2xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" @click="mobileMenuOpen = false">
          Markus von Staden
        </RouterLink>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-slate-300 hover:text-white" @click="mobileMenuOpen = false">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-white/5">
          <div class="space-y-2 py-6">
            <RouterLink 
              v-for="item in navigation" 
              :key="item.name" 
              :to="item.href" 
              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-100 hover:bg-white/5 hover:text-primary"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
