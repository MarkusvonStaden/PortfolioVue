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
    <h2 class="text-3xl md:text-4xl font-semibold text-zinc-900 mb-12 text-center">{{ $t('portfolio.titles.education') }}</h2>
    <div class="grid gap-6 max-w-4xl mx-auto">
      <div
        v-for="(item, index) in education.data"
        :key="index"
        class="card card-hover p-6 group"
        @click="$emit('open-modal', item)"
      >
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 class="text-xl font-semibold text-zinc-900 group-hover:text-primary transition-colors">{{ item.title }}</h3>
            <p class="text-zinc-500">{{ item.company }}</p>
          </div>
          <span class="text-sm text-zinc-500 bg-zinc-50 px-3 py-1 rounded-full w-fit border border-zinc-200">{{ item.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
