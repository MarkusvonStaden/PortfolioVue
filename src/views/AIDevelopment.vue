<script setup>
import ContactCTA from '../components/ContactCTA.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { 
  CpuChipIcon, 
  SparklesIcon, 
  CircleStackIcon, 
  Cog6ToothIcon 
} from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="container mx-auto px-6 py-12 relative">
    <!-- Background Elements -->
    <div class="absolute top-0 right-0 -z-10 opacity-20 overflow-hidden pointer-events-none">
        <div class="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div class="absolute top-[20%] right-[10%] w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent inline-block">
          {{ $t('ai_development.title') }}
        </h1>
        <p class="lead text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {{ $t('ai_development.lead') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-20">
        <!-- LLM Integration -->
        <ServiceCard
          :title="$t('ai_development.cards.llm_integration.title')"
          :description="$t('ai_development.cards.llm_integration.desc')"
          icon-bg-class="bg-primary/10"
          title-class="group-hover:text-primary"
        >
          <template #icon>
            <CpuChipIcon class="h-7 w-7 text-primary" />
          </template>
        </ServiceCard>

        <!-- AI Agents -->
        <ServiceCard
          :title="$t('ai_development.cards.ai_agents.title')"
          :description="$t('ai_development.cards.ai_agents.desc')"
          icon-bg-class="bg-accent/10"
          title-class="group-hover:text-accent"
        >
          <template #icon>
            <SparklesIcon class="h-7 w-7 text-accent" />
          </template>
        </ServiceCard>

        <!-- RAG Systems -->
        <ServiceCard
          :title="$t('ai_development.cards.rag_systems.title')"
          :description="$t('ai_development.cards.rag_systems.desc')"
          icon-bg-class="bg-indigo-500/10"
          title-class="group-hover:text-indigo-400"
        >
          <template #icon>
            <CircleStackIcon class="h-7 w-7 text-indigo-400" />
          </template>
        </ServiceCard>

        <!-- Process Automation -->
        <ServiceCard
          :title="$t('ai_development.cards.process_automation.title')"
          :description="$t('ai_development.cards.process_automation.desc')"
          icon-bg-class="bg-emerald-500/10"
          title-class="group-hover:text-emerald-400"
        >
          <template #icon>
            <Cog6ToothIcon class="h-7 w-7 text-emerald-400" />
          </template>
        </ServiceCard>
      </div>

      <div class="max-w-4xl mx-auto">
        <ContactCTA />
      </div>
    </div>
  </div>
</template>
