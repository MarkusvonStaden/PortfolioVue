<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t, locale } = useI18n()
const mobileMenuOpen = ref(false)

const navigation = computed(() => [
  { name: t('nav.home'), href: '/' },
  { name: t('nav.3d_printing'), href: '/3d-printing' },
  { name: t('nav.ai_development'), href: '/ai-development' },
  { name: t('nav.portfolio'), href: '/portfolio' },
  { name: t('nav.contact'), href: '/contact' },
])

const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'de' : 'en'
  locale.value = newLocale
  localStorage.setItem('user-locale', newLocale)
}
</script>

<template>
  <header class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-200">
    <nav class="container mx-auto px-6 h-20 flex items-center justify-between" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5 text-lg font-semibold text-zinc-900">
          Markus von Staden
        </NuxtLink>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink 
          v-for="item in navigation" 
          :key="item.name" 
          :to="item.href" 
          class="text-sm font-medium leading-6 transition-colors duration-200"
          :class="[route.path === item.href ? 'text-primary' : 'text-zinc-500 hover:text-zinc-900']"
        >
          {{ item.name }}
        </NuxtLink>
      </div>

      <!-- Language Switcher & Mobile Menu Button -->
      <div class="flex items-center gap-4 lg:flex-1 lg:justify-end">
        <button 
          @click="toggleLanguage"
          class="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          {{ locale === 'en' ? 'DE' : 'EN' }}
        </button>

        <div class="flex lg:hidden">
          <button 
            type="button" 
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-500 hover:text-zinc-900"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span class="sr-only">{{ t('nav.open_menu') }}</span>
            <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <!-- Mobile Menu -->
    <Teleport to="body">
      <div v-if="mobileMenuOpen" class="relative z-[100]" aria-modal="true">
        <!-- Backdrop -->
        <transition 
          enter-active-class="ease-out duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="ease-in duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div v-if="mobileMenuOpen" class="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm transition-opacity" @click="mobileMenuOpen = false"></div>
        </transition>

        <!-- Drawer -->
        <transition
          enter-active-class="transform transition ease-in-out duration-300 sm:duration-500"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transform transition ease-in-out duration-300 sm:duration-500"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div v-if="mobileMenuOpen" class="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-200">
            <div class="flex items-center justify-between">
              <NuxtLink to="/" class="-m-1.5 p-1.5 text-lg font-semibold text-zinc-900" @click="mobileMenuOpen = false">
                Markus von Staden
              </NuxtLink>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-zinc-500 hover:text-zinc-900" @click="mobileMenuOpen = false">
                <span class="sr-only">{{ t('nav.close_menu') }}</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-zinc-200">
                <div class="space-y-2 py-6">
                  <NuxtLink 
                    v-for="item in navigation" 
                    :key="item.name" 
                    :to="item.href" 
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-50 hover:text-primary transition-colors"
                    @click="mobileMenuOpen = false"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </div>
                <div class="py-6">
                  <button 
                    @click="toggleLanguage"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-zinc-900 hover:bg-zinc-50 w-full text-left transition-colors"
                  >
                    {{ locale === 'en' ? 'Switch to German' : 'Zu Englisch wechseln' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </Teleport>
  </header>
</template>
