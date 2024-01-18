<script setup>
import { useModal } from "../composables/useModal";

const modal = useModal();

function openModal(content) {
  modal.updateModalContent(content);
  modal.showModal();
}
</script>

<template>
  <div
    class="min-h-lvh md:min-h-screen text-slate-100 grid place-items-center content-center -z-10"
  >
    <h1 class="relative z-10 text-7xl w-2/3 m-10 font-extralight font-sans">
      Projects
    </h1>
    <div class="projects-list grid grid-cols-1 md:grid-cols-3 gap-10 w-2/3">
      <a
        v-for="project in data"
        class="project z-10 overflow-hidden relative inline-block rounded-2xl group min-w-fit max-w-lg w-auto aspect-square hover:lg:shadow-[0px_0px_100px_10px_rgba(109,40,217)] hover:lg:shadow-cyan-400/20 cursor-pointer"
        @click="openModal(project.content)"
      >
        <img
          :src="project.image"
          alt=""
          class="lg:grayscale object-cover lg:group-hover:grayscale-0 group-hover:scale-125 duration-500 w-full h-full bg-gradient-to-t from-black to-transparent"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
        >
          <div class="z-10 absolute inset-5">
            <h3
              class="absolute bottom-0 drop-shadow-lg font-sans font-medium text-3xl"
            >
              {{ project.title }}
            </h3>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
