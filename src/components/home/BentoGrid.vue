<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleMouseMove = (e) => {
  const cards = document.getElementsByClassName('bento-card')
  for (const card of cards) {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto p-4" @mousemove="handleMouseMove">
    
    <!-- Hero Text (Large, spans 2 cols, 2 rows) -->
    <div class="bento-card group md:col-span-2 md:row-span-2 p-8 flex flex-col justify-center min-h-[400px]">
      <div class="spotlight-overlay"></div>
      <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Innovating<br>The Future
      </h1>
      <p class="text-xl text-slate-400 max-w-md">
        Bridging the gap between software and reality through advanced AI solutions and precision 3D printing.
      </p>
    </div>

    <!-- AI Services (Medium, spans 2 cols) -->
    <div class="bento-card group md:col-span-2 p-8 cursor-pointer" @click="router.push('/ai-development')">
      <div class="spotlight-overlay"></div>
      <div class="flex justify-between items-start mb-8">
        <div class="p-3 rounded-full bg-primary/10 text-primary">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <svg class="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
      <h3 class="text-2xl font-bold mb-2">AI Development</h3>
      <p class="text-slate-400">LLMs, Agents, and Intelligent Systems.</p>
    </div>

    <!-- 3D Printing (Medium, spans 1 col, 2 rows) -->
    <div class="bento-card group md:col-span-1 md:row-span-2 p-8 cursor-pointer flex flex-col justify-between" @click="router.push('/3d-printing')">
      <div class="spotlight-overlay"></div>
      <div>
        <div class="p-3 rounded-full bg-secondary/10 text-secondary mb-8 w-fit">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-2">3D Printing</h3>
        <p class="text-slate-400 text-sm">Rapid Prototyping & Production.</p>
      </div>
      <div class="mt-4">
        <span class="text-xs font-mono text-secondary border border-secondary/20 px-2 py-1 rounded">AVAILABLE</span>
      </div>
    </div>

    <!-- Portfolio (Medium, spans 1 col, 2 rows) -->
    <div class="bento-card group md:col-span-1 md:row-span-2 p-8 cursor-pointer flex flex-col justify-between" @click="router.push('/portfolio')">
      <div class="spotlight-overlay"></div>
      <div>
        <div class="p-3 rounded-full bg-accent/10 text-accent mb-8 w-fit">
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-2">Portfolio</h3>
        <p class="text-slate-400 text-sm">Check out my latest projects.</p>
      </div>
      <div class="flex -space-x-2 mt-4">
        <div class="w-8 h-8 rounded-full bg-slate-700 border-2 border-dark-800"></div>
        <div class="w-8 h-8 rounded-full bg-slate-600 border-2 border-dark-800"></div>
        <div class="w-8 h-8 rounded-full bg-slate-500 border-2 border-dark-800 flex items-center justify-center text-[10px] font-bold">+5</div>
      </div>
    </div>

    <!-- Socials / Contact (Small, spans 2 cols) -->
    <div class="bento-card group md:col-span-2 p-8 flex items-center justify-between">
      <div class="spotlight-overlay"></div>
      <div>
        <h3 class="text-xl font-bold mb-1">Let's Connect</h3>
        <p class="text-slate-400 text-sm">Open for new opportunities.</p>
      </div>
      <div class="flex gap-4">
        <a href="#" class="p-2 hover:text-primary transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </a>
        <a href="#" class="p-2 hover:text-primary transition-colors">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>
    </div>

  </div>
</template>

<style scoped>
.spotlight-overlay {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.5s;
}

.bento-card:hover .spotlight-overlay {
  opacity: 1;
}
</style>
