<script setup>
import ContactCTA from '../components/ContactCTA.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { BeakerIcon, CubeTransparentIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent" v-motion-slide-visible-once-bottom>
        {{ $t('three_d_printing.title') }}
      </h1>
      
      <div class="prose prose-invert prose-lg max-w-none">
        <p class="lead text-xl md:text-2xl text-slate-300 mb-12" v-motion-slide-visible-once-bottom :delay="100">
          {{ $t('three_d_printing.lead') }}
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            :title="$t('three_d_printing.cards.prototyping.title')"
            :description="$t('three_d_printing.cards.prototyping.desc')"
            icon-bg-class="bg-secondary/10"
            title-class="group-hover:text-secondary"
            v-motion-slide-visible-once-bottom
            :delay="150"
          >
            <template #icon>
              <BeakerIcon class="h-7 w-7 text-secondary" />
            </template>
          </ServiceCard>

          <ServiceCard
            :title="$t('three_d_printing.cards.production.title')"
            :description="$t('three_d_printing.cards.production.desc')"
            icon-bg-class="bg-primary/10"
            title-class="group-hover:text-primary"
            v-motion-slide-visible-once-bottom
            :delay="200"
          >
            <template #icon>
              <CubeTransparentIcon class="h-7 w-7 text-primary" />
            </template>
          </ServiceCard>
        </div>

        <div class="bg-dark-800/50 rounded-2xl p-8 border border-white/5" v-motion-slide-visible-once-bottom :delay="300">
          <h2 class="text-2xl font-bold text-white mb-6 mt-0">{{ $t('three_d_printing.materials.title') }}</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center p-4 rounded-lg bg-white/5">
              <span class="block font-bold text-white">{{ $t('three_d_printing.materials.pla.name') }}</span>
              <span class="text-xs text-slate-400">{{ $t('three_d_printing.materials.pla.desc') }}</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-white/5">
              <span class="block font-bold text-white">{{ $t('three_d_printing.materials.petg.name') }}</span>
              <span class="text-xs text-slate-400">{{ $t('three_d_printing.materials.petg.desc') }}</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-white/5">
              <span class="block font-bold text-white">{{ $t('three_d_printing.materials.tpu.name') }}</span>
              <span class="text-xs text-slate-400">{{ $t('three_d_printing.materials.tpu.desc') }}</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-white/5">
              <span class="block font-bold text-white">{{ $t('three_d_printing.materials.abs_asa.name') }}</span>
              <span class="text-xs text-slate-400">{{ $t('three_d_printing.materials.abs_asa.desc') }}</span>
            </div>
            
            <!-- Multimaterial Highlight Card -->
            <div class="col-span-2 md:col-span-4 mt-4 relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative flex items-center justify-center p-4 rounded-lg bg-dark-900 border border-white/10">
                <div class="text-center">
                  <span class="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-1">
                    {{ $t('three_d_printing.materials.multimaterial.name') }}
                  </span>
                  <span class="text-sm text-slate-300">{{ $t('three_d_printing.materials.multimaterial.desc') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-4xl mx-auto" v-motion-slide-visible-once-bottom :delay="500">
          <ContactCTA />
        </div>
      </div>
    </div>
  </div>
</template>
