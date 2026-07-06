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
    <h2 class="text-3xl md:text-4xl font-semibold text-zinc-900 mb-12 text-center">{{ $t('portfolio.titles.hackathons') }}</h2>
    <div class="grid gap-6 max-w-4xl mx-auto">
      <div
        v-for="(item, index) in hackathons.data"
        :key="index"
        class="card card-hover p-6 group"
        @click="$emit('open-modal', item)"
      >
        <div>
          <div class="flex flex-col md:flex-row justify-between gap-4 mb-2">
            <h3 class="text-xl font-semibold text-zinc-900 group-hover:text-primary transition-colors">{{ item.title }}</h3>
            <span class="text-sm text-zinc-400">{{ item.date }}</span>
          </div>
          <p class="text-zinc-600">{{ item.company }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
