<script setup>
import ContactCTA from '../components/ContactCTA.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { BeakerIcon, CubeTransparentIcon } from '@heroicons/vue/24/outline'

useLocalizedSeo('meta.three_d_printing.title', 'meta.three_d_printing.description')

const materials = ['pla', 'petg', 'tpu', 'abs_asa']
</script>

<template>
  <div class="max-w-2xl mx-auto px-6 py-12 md:py-16 space-y-16 md:space-y-20">
    <header v-motion-slide-visible-once-bottom>
      <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
        {{ $t('three_d_printing.title') }}
      </h1>
      <p class="mt-4 text-lg text-zinc-500 leading-relaxed">
        {{ $t('three_d_printing.lead') }}
      </p>
    </header>

    <section v-motion-slide-visible-once-bottom>
      <ul class="divide-y divide-zinc-200 border-t border-zinc-200">
        <ServiceCard
          :title="$t('three_d_printing.cards.prototyping.title')"
          :description="$t('three_d_printing.cards.prototyping.desc')"
        >
          <template #icon>
            <BeakerIcon class="h-5 w-5 text-zinc-600" />
          </template>
        </ServiceCard>

        <ServiceCard
          :title="$t('three_d_printing.cards.production.title')"
          :description="$t('three_d_printing.cards.production.desc')"
        >
          <template #icon>
            <CubeTransparentIcon class="h-5 w-5 text-zinc-600" />
          </template>
        </ServiceCard>
      </ul>
    </section>

    <section v-motion-slide-visible-once-bottom>
      <h2 class="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">
        {{ $t('three_d_printing.materials.title') }}
      </h2>
      <dl class="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-zinc-200 pt-6">
        <div v-for="m in materials" :key="m">
          <dt class="font-medium text-zinc-900">{{ $t(`three_d_printing.materials.${m}.name`) }}</dt>
          <dd class="mt-0.5 text-sm text-zinc-500">{{ $t(`three_d_printing.materials.${m}.desc`) }}</dd>
        </div>
        <div class="col-span-2 border-t border-zinc-200 pt-6">
          <dt class="font-medium text-primary">{{ $t('three_d_printing.materials.multimaterial.name') }}</dt>
          <dd class="mt-0.5 text-sm text-zinc-500">{{ $t('three_d_printing.materials.multimaterial.desc') }}</dd>
        </div>
      </dl>
    </section>

    <ContactCTA v-motion-slide-visible-once-bottom />
  </div>
</template>
