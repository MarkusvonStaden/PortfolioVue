<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section class="border-t border-zinc-200 pt-10">
    <h2 class="text-2xl font-semibold tracking-tight text-zinc-900">{{ $t('cta.title') }}</h2>
    <p class="mt-2 text-zinc-500 leading-relaxed">{{ $t('cta.desc') }}</p>
    <NuxtLink
      to="/contact"
      class="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
    >
      {{ $t('cta.button') }}
      <ArrowRightIcon class="h-4 w-4" aria-hidden="true" />
    </NuxtLink>
  </section>
</template>
