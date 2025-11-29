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
    <h2 class="text-4xl font-bold mb-12 text-center font-display">{{ $t('portfolio.titles.projects') }}</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="(project, index) in projects" 
        :key="index"
        class="bento-card group relative aspect-square cursor-pointer overflow-hidden"
        @click="$emit('open-modal', project)"
      >
        <div class="spotlight-overlay z-20"></div>
        <img 
          :src="project.image" 
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        <div class="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-10">
          <h3 class="text-2xl font-bold text-white mb-2 font-display">{{ project.title }}</h3>
          <span class="text-primary font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {{ $t('portfolio.projects.view_project') }} <span class="text-xl">→</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
