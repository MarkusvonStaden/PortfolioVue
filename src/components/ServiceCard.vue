<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  iconBgClass: {
    type: String,
    default: 'bg-primary/10'
  },
  titleClass: {
    type: String,
    default: 'group-hover:text-primary'
  }
})
</script>

<template>
  <div class="bento-card group p-8 hover:bg-dark-800/60 transition-all duration-300">
    <div :class="['h-12 w-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300', iconBgClass]">
      <slot name="icon"></slot>
    </div>
    <h3 :class="['text-2xl font-bold text-white mb-4 transition-colors duration-300', titleClass]">
      {{ title }}
    </h3>
    <p class="text-slate-400 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
