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
    class="bg-[#131316] min-h-screen text-slate-100 grid place-items-center content-center -z-10"
  >
    <h1
      class="relative z-10 text-5xl lg:text-7xl lg:w-2/3 lg:m-10 font-extralight font-sans"
    >
      {{ data.title }}
    </h1>
    <div class="w-full lg:w-2/3 px-15 py-5 opacity-100">
      <div
        v-for="data in data.data"
        class="m-0 p-10 lg:border-l-2 lg:hover:box-accent lg:hover:text-[#131316] ease-in-out duration-100 lg:hover:ml-2 cursor-pointer"
        @click="openModal(data.content)"
      >
        <div class="relative z-10 group">
          <p class="font-mono text-xl">
            {{ data.date }}
          </p>
          <p class="text-4xl z-10">{{ data.title }}</p>
          <p class="text-2xl z-10">{{ data.company }}</p>
        </div>
      </div>
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
