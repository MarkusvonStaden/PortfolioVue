<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ComputerDesktopIcon, CubeTransparentIcon, RectangleStackIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

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
    <div 
      class="bento-card group md:col-span-2 md:row-span-2 p-8 flex flex-col justify-center min-h-[400px]"
      v-motion-slide-visible-once-bottom
    >
      <div class="spotlight-overlay"></div>
      <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent" v-html="$t('home.hero.title')"></h1>
      <p class="text-xl text-slate-400 max-w-md">
        {{ $t('home.hero.subtitle') }}
      </p>
    </div>

    <!-- AI Services (Medium, spans 2 cols) -->
    <RouterLink 
      to="/ai-development"
      class="bento-card group md:col-span-2 p-8 cursor-pointer block" 
      v-motion-slide-visible-once-bottom
      :delay="100"
    >
      <div class="spotlight-overlay"></div>
      <div class="flex justify-between items-start mb-8">
        <div class="p-3 rounded-full bg-primary/10 text-primary">
          <ComputerDesktopIcon class="w-8 h-8" />
        </div>
      </div>
      <h3 class="text-2xl font-bold mb-2">{{ $t('home.cards.ai.title') }}</h3>
      <p class="text-slate-400">{{ $t('home.cards.ai.desc') }}</p>
    </RouterLink>

    <!-- 3D Printing (Medium, spans 1 col, 2 rows) -->
    <RouterLink 
      to="/3d-printing"
      class="bento-card group md:col-span-1 md:row-span-2 p-8 cursor-pointer flex flex-col justify-between" 
      v-motion-slide-visible-once-bottom
      :delay="200"
    >
      <div class="spotlight-overlay"></div>
      <div>
        <div class="p-3 rounded-full bg-secondary/10 text-secondary mb-8 w-fit">
          <CubeTransparentIcon class="w-8 h-8" />
        </div>
        <h3 class="text-2xl font-bold mb-2">{{ $t('home.cards.printing.title') }}</h3>
        <p class="text-slate-400 text-sm">{{ $t('home.cards.printing.desc') }}</p>
      </div>
      <div class="mt-4">
        <span class="text-xs font-mono text-secondary border border-secondary/20 px-2 py-1 rounded">{{ $t('home.cards.printing.available') }}</span>
      </div>
    </RouterLink>

    <!-- Portfolio (Medium, spans 1 col, 2 rows) -->
    <RouterLink 
      to="/portfolio"
      class="bento-card group md:col-span-1 md:row-span-2 p-8 cursor-pointer flex flex-col justify-between" 
      v-motion-slide-visible-once-bottom
      :delay="300"
    >
      <div class="spotlight-overlay"></div>
      <div>
        <div class="p-3 rounded-full bg-accent/10 text-accent mb-8 w-fit">
          <RectangleStackIcon class="w-8 h-8" />
        </div>
        <h3 class="text-2xl font-bold mb-2">{{ $t('home.cards.portfolio.title') }}</h3>
        <p class="text-slate-400 text-sm">{{ $t('home.cards.portfolio.desc') }}</p>
      </div>
      <div class="flex -space-x-2 mt-4">
        <div class="w-8 h-8 rounded-full bg-slate-700 border-2 border-dark-800"></div>
        <div class="w-8 h-8 rounded-full bg-slate-600 border-2 border-dark-800"></div>
        <div class="w-8 h-8 rounded-full bg-slate-500 border-2 border-dark-800 flex items-center justify-center text-[10px] font-bold">+5</div>
      </div>
    </RouterLink>

    <!-- Socials / Contact (Small, spans 2 cols) -->
    <RouterLink 
      to="/contact"
      class="bento-card group md:col-span-2 p-8 flex items-center justify-between cursor-pointer block" 
      v-motion-slide-visible-once-bottom
      :delay="400"
    >
      <div class="spotlight-overlay"></div>
      <div>
        <h3 class="text-xl font-bold mb-1">{{ $t('home.cards.connect.title') }}</h3>
        <p class="text-slate-400 text-sm">{{ $t('home.cards.connect.desc') }}</p>
      </div>
      <div class="">
        <EnvelopeIcon class="w-8 h-8" />
      </div>
    </RouterLink>

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
