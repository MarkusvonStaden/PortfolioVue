<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  }
})

defineEmits(['open-modal'])
</script>

<template>
  <section>
    <h2 class="text-3xl md:text-4xl font-semibold text-zinc-900 mb-12 text-center">{{ $t('portfolio.titles.projects') }}</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="card card-hover group relative aspect-square overflow-hidden"
        @click="$emit('open-modal', project)"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300"></div>
        <div class="absolute bottom-0 left-0 p-8">
          <h3 class="text-2xl font-semibold text-white mb-2">{{ project.title }}</h3>
          <span class="text-white font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {{ $t('portfolio.projects.view_project') }} <span class="text-xl">→</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
