<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

const links = [
  { to: '/ai-development', key: 'ai' },
  { to: '/3d-printing', key: 'printing' },
  { to: '/portfolio', key: 'portfolio' },
  { to: '/contact', key: 'connect' },
]
</script>

<template>
  <section
    v-motion-slide-visible-once-bottom
    class="max-w-2xl mx-auto px-6 pt-16 md:pt-24"
  >
    <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
      Markus von Staden
    </h1>
    <p class="mt-4 text-lg text-zinc-500 leading-relaxed">
      {{ $t('home.hero.subtitle') }}
    </p>

    <ul class="mt-12 md:mt-16 divide-y divide-zinc-200 border-t border-zinc-200">
      <li v-for="item in links" :key="item.key">
        <NuxtLink :to="item.to" class="group flex items-center justify-between gap-4 py-5">
          <div>
            <p class="text-lg font-medium text-zinc-900 group-hover:text-primary transition-colors">
              {{ $t(`home.cards.${item.key}.title`) }}
            </p>
            <p class="mt-0.5 text-sm text-zinc-500">
              {{ $t(`home.cards.${item.key}.desc`) }}
            </p>
          </div>
          <ArrowRightIcon class="h-5 w-5 shrink-0 text-zinc-400 group-hover:text-primary group-hover:translate-x-0.5 transition" />
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
