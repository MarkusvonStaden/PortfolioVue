<script setup>
</script>

<template>
  <section class="grid md:grid-cols-2 gap-12 items-center">
    <div class="space-y-6">
      <h2 class="text-4xl md:text-5xl font-bold text-white">About Me</h2>
      <div class="prose prose-invert prose-lg text-slate-300">
        <ul class="space-y-2 list-none pl-0">
          <li class="flex items-center gap-3">
            <span class="text-primary">▹</span> Passionate Machine Learning Student
          </li>
          <li class="flex items-center gap-3">
            <span class="text-primary">▹</span> Tinkerer with 3D Printers, Electronics and Programming
          </li>
          <li class="flex items-center gap-3">
            <span class="text-primary">▹</span> Motivated team player & volunteer
          </li>
        </ul>
      </div>
    </div>
    <div class="relative group max-w-xs mx-auto">
      <div class="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      <img src="../../assets/profile.jpg" alt="Markus" class="relative rounded-2xl w-full object-cover shadow-2xl ring-1 ring-white/10" />
    </div>
  </section>
</template>
