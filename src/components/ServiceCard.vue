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
  <li class="flex gap-4 py-6">
    <div class="h-10 w-10 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0" aria-hidden="true">
      <slot name="icon"></slot>
    </div>
    <div>
      <p class="font-medium text-zinc-900">{{ title }}</p>
      <p class="mt-0.5 text-sm text-zinc-500 leading-relaxed">{{ description }}</p>
    </div>
  </li>
</template>
