<script setup>
</script>

<template>
  <div class="container mx-auto px-6 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
        3D Printing Services
      </h1>
      
      <div class="prose prose-invert prose-lg max-w-none">
        <p class="lead text-xl text-slate-300 mb-12">
          From rapid prototyping to small-batch production, we bring your digital designs to physical reality with precision and speed.
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <div class="card">
            <div class="text-secondary mb-4">
              <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Prototyping</h3>
            <p class="text-slate-400 text-sm">Fast iteration for your product designs. Send us your STL files and get your parts quickly.</p>
          </div>
          <div class="card">
            <div class="text-secondary mb-4">
              <svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Production</h3>
            <p class="text-slate-400 text-sm">Small-batch manufacturing with consistent quality. Ideal for end-use parts and functional components.</p>
          </div>
        </div>

        <div class="bg-dark-800/50 rounded-2xl p-8 border border-white/5">
          <h2 class="text-2xl font-bold text-white mb-6">Materials</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center p-4 rounded-lg bg-white/5">
              <span class="block font-bold text-white">PLA</span>
              <span class="text-xs text-slate-400">Standard & Eco</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-white/5">
              <span class="block font-bold text-white">PETG</span>
              <span class="text-xs text-slate-400">Durable & Heat Resistant</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-white/5">
              <span class="block font-bold text-white">TPU</span>
              <span class="text-xs text-slate-400">Flexible</span>
            </div>
            <div class="text-center p-4 rounded-lg bg-white/5">
              <span class="block font-bold text-white">ABS/ASA</span>
              <span class="text-xs text-slate-400">Industrial Grade</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
