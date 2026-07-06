<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card p-8">
    <div class="h-11 w-11 rounded-lg bg-zinc-100 flex items-center justify-center mb-6">
      <slot name="icon"></slot>
    </div>
    <h3 class="text-xl font-semibold text-zinc-900 mb-3">
      {{ title }}
    </h3>
    <p class="text-zinc-600 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
