<script setup>
import HomeHero from '../components/home/HomeHero.vue'

useLocalizedSeo('meta.home.title', 'meta.home.description')
</script>

<template>
  <div class="pb-24 pt-8 md:pt-12">
    <HomeHero />
  </div>
</template>
