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
    <h2 class="text-3xl md:text-4xl font-semibold text-zinc-900 mb-12 text-center">{{ $t('portfolio.titles.certificates') }}</h2>
    <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <div
        v-for="(item, index) in certificates.data"
        :key="index"
        class="card card-hover p-6 group"
        @click="$emit('open-modal', item)"
      >
        <div>
          <span class="text-xs text-zinc-400 mb-2 block">{{ item.date }}</span>
          <h3 class="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-primary transition-colors">{{ item.title }}</h3>
          <p class="text-zinc-500 text-sm">{{ item.company }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
