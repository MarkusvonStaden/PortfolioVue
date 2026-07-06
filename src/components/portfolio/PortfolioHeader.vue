<script setup>
</script>

<template>
  <header>
    <div class="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
          {{ $t('portfolio.intro.hi') }} <span class="text-primary">Markus</span>
        </h1>
        <p class="mt-4 text-lg text-zinc-500 leading-relaxed">
          {{ $t('portfolio.intro.role') }}
        </p>
      </div>
      <img
        src="../../assets/profile.jpg"
        alt="Markus von Staden"
        class="h-24 w-24 md:h-28 md:w-28 shrink-0 rounded-2xl object-cover border border-zinc-200 shadow-sm"
      />
    </div>
    <ul class="mt-8 space-y-2 text-zinc-600">
      <li class="flex items-start gap-3">
        <span class="text-primary">▹</span>{{ $t('portfolio.about.item1') }}
      </li>
      <li class="flex items-start gap-3">
        <span class="text-primary">▹</span>{{ $t('portfolio.about.item2') }}
      </li>
      <li class="flex items-start gap-3">
        <span class="text-primary">▹</span>{{ $t('portfolio.about.item3') }}
      </li>
    </ul>
  </header>
</template>
