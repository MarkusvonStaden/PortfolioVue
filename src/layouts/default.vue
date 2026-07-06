<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-zinc-900 font-sans selection:bg-primary selection:text-white flex flex-col">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="flex-grow pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
