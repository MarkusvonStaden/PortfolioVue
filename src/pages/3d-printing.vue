<script setup>
import ContactCTA from '../components/ContactCTA.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { BeakerIcon, CubeTransparentIcon } from '@heroicons/vue/24/outline'

useLocalizedSeo('meta.three_d_printing.title', 'meta.three_d_printing.description')
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-semibold text-zinc-900 mb-8" v-motion-slide-visible-once-bottom>
        {{ $t('three_d_printing.title') }}
      </h1>

      <div class="max-w-none">
        <p class="text-xl md:text-2xl text-zinc-600 leading-relaxed mb-12" v-motion-slide-visible-once-bottom :delay="100">
          {{ $t('three_d_printing.lead') }}
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            :title="$t('three_d_printing.cards.prototyping.title')"
            :description="$t('three_d_printing.cards.prototyping.desc')"
            v-motion-slide-visible-once-bottom
            :delay="150"
          >
            <template #icon>
              <BeakerIcon class="h-6 w-6 text-zinc-700" />
            </template>
          </ServiceCard>

          <ServiceCard
            :title="$t('three_d_printing.cards.production.title')"
            :description="$t('three_d_printing.cards.production.desc')"
            v-motion-slide-visible-once-bottom
            :delay="200"
          >
            <template #icon>
              <CubeTransparentIcon class="h-6 w-6 text-zinc-700" />
            </template>
          </ServiceCard>
        </div>

        <div class="card p-8" v-motion-slide-visible-once-bottom :delay="300">
          <h2 class="text-2xl font-semibold text-zinc-900 mb-6 mt-0">{{ $t('three_d_printing.materials.title') }}</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center p-4 rounded-lg bg-zinc-50 border border-zinc-200">
              <span class="block font-semibold text-zinc-900">{{ $t('three_d_printing.materials.pla.name') }}</span>
              <span class="text-xs text-zinc-500">{{ $t('three_d_printing.materials.pla.desc') }}</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-zinc-50 border border-zinc-200">
              <span class="block font-semibold text-zinc-900">{{ $t('three_d_printing.materials.petg.name') }}</span>
              <span class="text-xs text-zinc-500">{{ $t('three_d_printing.materials.petg.desc') }}</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-zinc-50 border border-zinc-200">
              <span class="block font-semibold text-zinc-900">{{ $t('three_d_printing.materials.tpu.name') }}</span>
              <span class="text-xs text-zinc-500">{{ $t('three_d_printing.materials.tpu.desc') }}</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-zinc-50 border border-zinc-200">
              <span class="block font-semibold text-zinc-900">{{ $t('three_d_printing.materials.abs_asa.name') }}</span>
              <span class="text-xs text-zinc-500">{{ $t('three_d_printing.materials.abs_asa.desc') }}</span>
            </div>

            <!-- Multimaterial Highlight Card -->
            <div class="col-span-2 md:col-span-4 mt-4 flex items-center justify-center p-4 rounded-lg border border-primary/30 bg-white">
              <div class="text-center">
                <span class="block font-semibold text-primary mb-1">
                  {{ $t('three_d_printing.materials.multimaterial.name') }}
                </span>
                <span class="text-sm text-zinc-600">{{ $t('three_d_printing.materials.multimaterial.desc') }}</span>
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
