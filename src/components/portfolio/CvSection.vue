<script setup>
import { computed, ref } from 'vue'
import { ArrowDownTrayIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  entries: {
    type: Array,
    required: true
  }
})

const openIndex = ref(null)

const sectionId = computed(() => props.title.replace(/\W+/g, '-'))

function hasDetails(entry) {
  return !!(entry.description || entry.projects?.length || entry.documents?.length)
}

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section>
    <h2 class="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">{{ title }}</h2>
    <ul class="divide-y divide-zinc-200 border-t border-zinc-200">
      <li v-for="(entry, index) in entries" :key="index">
        <component
          :is="hasDetails(entry) ? 'button' : 'div'"
          :type="hasDetails(entry) ? 'button' : undefined"
          class="group flex w-full items-center gap-4 py-5 text-left"
          :aria-expanded="hasDetails(entry) ? openIndex === index : undefined"
          :aria-controls="hasDetails(entry) ? `cv-panel-${sectionId}-${index}` : undefined"
          @click="hasDetails(entry) && toggle(index)"
        >
          <span v-if="entry.date" class="w-24 sm:w-28 shrink-0 text-sm text-zinc-400 tabular-nums">
            {{ entry.date }}
          </span>
          <img
            v-else-if="entry.image"
            :src="entry.image"
            :alt="entry.title"
            class="h-16 w-24 sm:w-28 shrink-0 rounded-lg object-cover border border-zinc-200"
          />
          <span class="min-w-0 flex-1">
            <span
              class="block font-medium text-zinc-900 transition-colors"
              :class="{ 'group-hover:text-primary': hasDetails(entry) }"
            >
              {{ entry.title }}
            </span>
            <span class="mt-0.5 block text-sm text-zinc-500">{{ entry.company }}</span>
          </span>
          <ChevronDownIcon
            v-if="hasDetails(entry)"
            aria-hidden="true"
            class="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300 group-hover:text-primary"
            :class="{ 'rotate-180': openIndex === index }"
          />
        </component>

        <div
          v-if="hasDetails(entry)"
          :id="`cv-panel-${sectionId}-${index}`"
          class="grid transition-[grid-template-rows] duration-300 ease-out"
          :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
        >
          <div class="overflow-hidden">
            <div class="pb-6 pl-0 sm:pl-32">
              <img
                v-if="entry.image"
                :src="entry.image"
                :alt="entry.title"
                class="mb-4 w-full aspect-[2/1] rounded-xl object-cover border border-zinc-200"
              />
              <p v-if="entry.description" class="text-sm md:text-base text-zinc-600 leading-relaxed">
                {{ entry.description }}
              </p>
              <div v-if="entry.projects?.length" class="mt-4">
                <h3 class="text-xs font-medium uppercase tracking-wide text-zinc-400">
                  {{ entry.sectionTitle }}
                </h3>
                <ul class="mt-2 space-y-3">
                  <li v-for="(project, pIndex) in entry.projects" :key="pIndex">
                    <p class="text-sm font-medium text-zinc-900">{{ project.title }}</p>
                    <p class="mt-0.5 text-sm text-zinc-500">{{ project.description }}</p>
                  </li>
                </ul>
              </div>
              <div v-if="entry.documents?.length" class="mt-4">
                <h3 class="text-xs font-medium uppercase tracking-wide text-zinc-400">
                  {{ $t('portfolio.documents') }}
                </h3>
                <div class="mt-2 flex flex-wrap gap-2">
                  <a
                    v-for="(doc, dIndex) in entry.documents"
                    :key="dIndex"
                    :href="doc.file"
                    target="_blank"
                    rel="noopener"
                    class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/15 transition-colors"
                  >
                    <ArrowDownTrayIcon class="h-4 w-4" aria-hidden="true" />
                    {{ doc.title }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
