<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <div class="min-h-screen bg-dark-900 text-slate-100 font-sans selection:bg-primary selection:text-white flex flex-col relative overflow-hidden">
    <!-- Animated Blobs -->
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px] animate-blob"></div>
      <div class="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-accent/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
    </div>

    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="flex-grow pt-20 relative z-10">
      <slot />
    </main>

    <!-- Footer -->
    <Footer class="relative z-10" />
  </div>
</template>
