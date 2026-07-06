<script setup>
useLocalizedSeo('meta.imprint.title', 'meta.imprint.description')
</script>

<template>
  <div class="container mx-auto px-6 py-24 max-w-4xl">
    <h1 class="text-4xl font-semibold mb-8 text-zinc-900">{{ $t('imprint.title') }}</h1>

    <div class="prose prose-zinc prose-lg text-zinc-600 space-y-8">
      <section>
        <h2 class="text-2xl font-semibold text-zinc-900 mb-4">{{ $t('imprint.tmg.title') }}</h2>
        <p v-html="$t('imprint.tmg.content')"></p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-zinc-900 mb-4">{{ $t('imprint.contact.title') }}</h2>
        <p v-html="$t('imprint.contact.content')"></p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-zinc-900 mb-4">{{ $t('imprint.register.title') }}</h2>
        <p v-html="$t('imprint.register.content')"></p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-zinc-900 mb-4">{{ $t('imprint.liability_content.title') }}</h2>
        <p>{{ $t('imprint.liability_content.p1') }}</p>
        <p>{{ $t('imprint.liability_content.p2') }}</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-zinc-900 mb-4">{{ $t('imprint.copyright.title') }}</h2>
        <p>{{ $t('imprint.copyright.p1') }}</p>
        <p>{{ $t('imprint.copyright.p2') }}</p>
      </section>
    </div>
  </div>
</template>
