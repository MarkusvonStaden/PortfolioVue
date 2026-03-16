<script setup>
</script>

<template>
  <section class="container mx-auto px-6">
    <div class="grid md:grid-cols-2 gap-8">
      <!-- AI Service Card -->
      <div class="card group cursor-pointer" @click="$router.push('/ai-development')">
        <div class="h-48 mb-6 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
          <svg class="w-20 h-20 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">AI Development</h3>
        <p class="text-slate-400 mb-6">
          Building the future with Large Language Models (LLMs) and intelligent autonomous agents.
        </p>
        <span class="text-primary font-medium flex items-center gap-2">
          Learn more 
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>

      <!-- 3D Printing Card -->
      <div class="card group cursor-pointer" @click="$router.push('/3d-printing')">
        <div class="h-48 mb-6 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
          <svg class="w-20 h-20 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">3D Printing Service</h3>
        <p class="text-slate-400 mb-6">
          High-quality rapid prototyping and small-batch production. You design it, we print it.
        </p>
        <span class="text-secondary font-medium flex items-center gap-2">
          Learn more 
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </div>
  </section>
</template>
