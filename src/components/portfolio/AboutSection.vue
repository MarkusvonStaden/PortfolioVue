<script setup>
</script>

<template>
  <section class="grid md:grid-cols-2 gap-12 items-center">
    <div class="space-y-6">
      <h2 class="text-3xl md:text-4xl font-semibold text-zinc-900">{{ $t('portfolio.about.title') }}</h2>
      <div class="text-lg text-zinc-600">
        <ul class="space-y-2 list-none pl-0">
          <li class="flex items-center gap-3">
            <span class="text-primary">▹</span> {{ $t('portfolio.about.item1') }}
          </li>
          <li class="flex items-center gap-3">
            <span class="text-primary">▹</span> {{ $t('portfolio.about.item2') }}
          </li>
          <li class="flex items-center gap-3">
            <span class="text-primary">▹</span> {{ $t('portfolio.about.item3') }}
          </li>
        </ul>
      </div>
    </div>
    <div class="max-w-xs mx-auto">
      <img src="../../assets/profile.jpg" alt="Markus" class="rounded-2xl w-full object-cover border border-zinc-200 shadow-sm" />
    </div>
  </section>
</template>
