<script setup>
defineProps({
  hackathons: {
    type: Object,
    required: true
  }
})

defineEmits(['open-modal'])
</script>

<template>
  <section>
    <h2 class="text-4xl font-bold mb-12 text-center font-display">Hackathons</h2>
    <div class="grid gap-6 max-w-4xl mx-auto">
      <div 
        v-for="(item, index) in hackathons.data" 
        :key="index"
        class="bento-card p-6 cursor-pointer group"
        @click="$emit('open-modal', item.content)"
      >
        <div class="spotlight-overlay"></div>
        <div class="relative z-10">
          <div class="flex flex-col md:flex-row justify-between gap-4 mb-2">
            <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">{{ item.title }}</h3>
            <span class="font-mono text-sm text-slate-500">{{ item.date }}</span>
          </div>
          <p class="text-slate-300">{{ item.company }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
