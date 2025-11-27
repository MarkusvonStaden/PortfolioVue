<script setup>
defineProps({
  certificates: {
    type: Object,
    required: true
  }
})

defineEmits(['open-modal'])
</script>

<template>
  <section>
    <h2 class="text-4xl font-bold mb-12 text-center font-display">Certificates & Awards</h2>
    <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <div 
        v-for="(item, index) in certificates.data" 
        :key="index"
        class="bento-card p-6 cursor-pointer group"
        @click="$emit('open-modal', item.content)"
      >
        <div class="spotlight-overlay"></div>
        <div class="relative z-10">
          <span class="font-mono text-xs text-accent mb-2 block">{{ item.date }}</span>
          <h3 class="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">{{ item.title }}</h3>
          <p class="text-slate-400 text-sm">{{ item.company }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
