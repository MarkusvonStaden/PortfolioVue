<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div class="mt-24 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/10 p-8 md:p-12 text-center">
    <!-- Background Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
    
    <div class="relative z-10 max-w-2xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white mt-0">{{ t('cta.title') }}</h2>
      <p class="text-lg text-slate-300 mb-8">{{ t('cta.desc') }}</p>
      
      <button 
        @click="router.push('/contactme')"
        class="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary-dark rounded-full transition-all shadow-lg hover:shadow-primary/25"
      >
        {{ t('cta.button') }}
        <svg class="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </div>
</template>
