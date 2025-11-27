<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="relative h-[90vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-dark-900 to-dark-900 z-0"></div>
    <div class="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 z-0"></div>
    
    <div class="container mx-auto px-6 relative z-10 text-center">
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight animate-fade-in">
        <span class="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Innovating
        </span>
        <br />
        The Future
      </h1>
      <p class="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 animate-slide-up" style="animation-delay: 0.2s">
        Bridging the gap between software and reality through advanced AI solutions and precision 3D printing.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style="animation-delay: 0.4s">
        <RouterLink to="/portfolio" class="btn-primary">
          View Portfolio
        </RouterLink>
        <RouterLink to="/ai-development" class="btn-secondary">
          Explore Services
        </RouterLink>
      </div>
    </div>
  </section>
</template>
