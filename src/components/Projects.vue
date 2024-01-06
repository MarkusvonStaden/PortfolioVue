<template>
  <div
    class="bg-[#131316] min-h-screen text-slate-100 grid place-items-center content-center -z-10"
  >
    <h1 class="relative z-10 text-7xl w-2/3 m-10 font-extralight font-sans">
      Projects
    </h1>
    <div class="projects-list grid grid-cols-1 md:grid-cols-3 gap-10 w-2/3">
      <a
        v-for="project in projects"
        class="project z-10 overflow-hidden relative inline-block rounded-2xl group min-w-fit max-w-lg w-auto aspect-square hover:shadow-[0px_0px_100px_10px_rgba(109,40,217)] hover:shadow-cyan-400/20 cursor-pointer"
      >
        <img
          :src="project.image"
          alt=""
          class="grayscale object-cover group-hover:grayscale-0 group-hover:scale-125 duration-500 w-full h-full"
        />
        <h3
          class="z-10 absolute text-3xl inset-5 font-sans font-medium drop-shadow-lg"
        >
          {{ project.title }}
        </h3>
      </a>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: "b2api",
    title: "Blackboard2API",
    image: "https://picsum.photos/300/400",
  },
  {
    id: "project",
    title: "IoT Garagenöffner",
    image: "https://picsum.photos/400/300",
  },
  {
    id: "rainmaker",
    title: "Timecube",
    image: "https://picsum.photos/400/300",
  },
];
</script>
