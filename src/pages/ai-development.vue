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
  <div class="container mx-auto px-6 py-12">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" v-motion-slide-visible-once-bottom>
        <h1 class="text-4xl md:text-5xl font-semibold text-zinc-900 mb-6">
          {{ $t('ai_development.title') }}
        </h1>
        <p class="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          {{ $t('ai_development.lead') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-20">
        <!-- LLM Integration -->
        <ServiceCard
          :title="$t('ai_development.cards.llm_integration.title')"
          :description="$t('ai_development.cards.llm_integration.desc')"
          v-motion-slide-visible-once-bottom
          :delay="200"
        >
          <template #icon>
            <CpuChipIcon class="h-6 w-6 text-zinc-700" />
          </template>
        </ServiceCard>

        <!-- AI Agents -->
        <ServiceCard
          :title="$t('ai_development.cards.ai_agents.title')"
          :description="$t('ai_development.cards.ai_agents.desc')"
          v-motion-slide-visible-once-bottom
          :delay="300"
        >
          <template #icon>
            <SparklesIcon class="h-6 w-6 text-zinc-700" />
          </template>
        </ServiceCard>

        <!-- RAG Systems -->
        <ServiceCard
          :title="$t('ai_development.cards.rag_systems.title')"
          :description="$t('ai_development.cards.rag_systems.desc')"
          v-motion-slide-visible-once-bottom
          :delay="400"
        >
          <template #icon>
            <CircleStackIcon class="h-6 w-6 text-zinc-700" />
          </template>
        </ServiceCard>

        <!-- Process Automation -->
        <ServiceCard
          :title="$t('ai_development.cards.process_automation.title')"
          :description="$t('ai_development.cards.process_automation.desc')"
          v-motion-slide-visible-once-bottom
          :delay="500"
        >
          <template #icon>
            <Cog6ToothIcon class="h-6 w-6 text-zinc-700" />
          </template>
        </ServiceCard>
      </div>

      <div class="max-w-4xl mx-auto" v-motion-slide-visible-once-bottom :delay="600">
        <ContactCTA />
      </div>
    </div>
  </div>
</template>
