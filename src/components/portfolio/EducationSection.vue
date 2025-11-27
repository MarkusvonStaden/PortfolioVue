<script setup>
defineProps({
  education: {
    type: Object,
    required: true
  }
})

defineEmits(['open-modal'])
</script>

<template>
  <section>
    <h2 class="text-4xl font-bold mb-12 text-center font-display">Education</h2>
    <div class="grid gap-6 max-w-4xl mx-auto">
      <div 
        v-for="(item, index) in education.data" 
        :key="index"
        class="bento-card p-6 cursor-pointer group"
        @click="$emit('open-modal', item.content)"
      >
        <div class="spotlight-overlay"></div>
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <h3 class="text-xl font-bold text-white group-hover:text-secondary transition-colors">{{ item.title }}</h3>
            <p class="text-slate-400">{{ item.company }}</p>
          </div>
          <span class="font-mono text-sm text-secondary bg-secondary/10 px-3 py-1 rounded-full w-fit border border-secondary/20">{{ item.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
