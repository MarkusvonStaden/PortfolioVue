<script setup>
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div class="mt-24 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 md:p-12 text-center">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4 mt-0">{{ t('cta.title') }}</h2>
      <p class="text-lg text-zinc-600 mb-8">{{ t('cta.desc') }}</p>

      <button
        @click="router.push('/contact')"
        class="btn-primary"
      >
        {{ t('cta.button') }}
        <svg class="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </div>
</template>
