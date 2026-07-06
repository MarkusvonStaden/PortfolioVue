<script setup>
import ContactCTA from '../components/ContactCTA.vue'
import ServiceCard from '../components/ServiceCard.vue'
import {
  CpuChipIcon,
  SparklesIcon,
  CircleStackIcon,
  Cog6ToothIcon
} from '@heroicons/vue/24/outline'

useLocalizedSeo('meta.ai_development.title', 'meta.ai_development.description')
</script>

<template>
  <div class="max-w-2xl mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-20">
    <header v-motion-slide-visible-once-bottom>
      <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
        {{ $t('ai_development.title') }}
      </h1>
      <p class="mt-4 text-lg text-zinc-500 leading-relaxed">
        {{ $t('ai_development.lead') }}
      </p>
    </header>

    <section v-motion-slide-visible-once-bottom>
      <ul class="divide-y divide-zinc-200 border-t border-zinc-200">
        <ServiceCard
          :title="$t('ai_development.cards.llm_integration.title')"
          :description="$t('ai_development.cards.llm_integration.desc')"
        >
          <template #icon>
            <CpuChipIcon class="h-5 w-5 text-zinc-600" />
          </template>
        </ServiceCard>

        <ServiceCard
          :title="$t('ai_development.cards.ai_agents.title')"
          :description="$t('ai_development.cards.ai_agents.desc')"
        >
          <template #icon>
            <SparklesIcon class="h-5 w-5 text-zinc-600" />
          </template>
        </ServiceCard>

        <ServiceCard
          :title="$t('ai_development.cards.rag_systems.title')"
          :description="$t('ai_development.cards.rag_systems.desc')"
        >
          <template #icon>
            <CircleStackIcon class="h-5 w-5 text-zinc-600" />
          </template>
        </ServiceCard>

        <ServiceCard
          :title="$t('ai_development.cards.process_automation.title')"
          :description="$t('ai_development.cards.process_automation.desc')"
        >
          <template #icon>
            <Cog6ToothIcon class="h-5 w-5 text-zinc-600" />
          </template>
        </ServiceCard>
      </ul>
    </section>

    <ContactCTA v-motion-slide-visible-once-bottom />
  </div>
</template>
