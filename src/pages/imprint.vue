<script setup>
useLocalizedSeo('meta.imprint.title', 'meta.imprint.description')
</script>

<template>
  <div class="max-w-2xl mx-auto px-6 py-12 md:py-16">
    <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900" v-motion-slide-visible-once-bottom>{{ $t('imprint.title') }}</h1>

    <div class="mt-10 prose prose-zinc text-zinc-600 space-y-8">
      <section>
        <h2 class="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">{{ $t('imprint.tmg.title') }}</h2>
        <p v-html="$t('imprint.tmg.content')"></p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">{{ $t('imprint.contact.title') }}</h2>
        <p v-html="$t('imprint.contact.content')"></p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">{{ $t('imprint.register.title') }}</h2>
        <p v-html="$t('imprint.register.content')"></p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">{{ $t('imprint.liability_content.title') }}</h2>
        <p>{{ $t('imprint.liability_content.p1') }}</p>
        <p>{{ $t('imprint.liability_content.p2') }}</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">{{ $t('imprint.copyright.title') }}</h2>
        <p>{{ $t('imprint.copyright.p1') }}</p>
        <p>{{ $t('imprint.copyright.p2') }}</p>
      </section>
    </div>
  </div>
</template>
