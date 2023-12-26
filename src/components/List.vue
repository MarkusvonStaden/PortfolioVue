<script setup>
import { useModal } from "../composables/useModal";

const modal = useModal();
</script>

<template>
  <div
    class="bg-[#131316] min-h-screen text-slate-100 grid place-items-center content-center -z-10"
  >
    <h1 class="relative z-10 text-7xl w-2/3 m-10 font-extralight font-sans">
      {{ data.title }}
    </h1>
    <div class="w-2/3 px-15 py-5 opacity-100">
      <div
        v-for="data in data.data"
        class="m-0 p-10 border-l-2 hover:box-accent hover:text-[#131316] ease-in-out duration-100 hover:ml-2"
        @click="modal.showModal()"
      >
        <div class="relative z-10 group">
          <p class="font-mono text-xl">
            {{ data.date }}
          </p>
          <p class="text-4xl z-10">{{ data.title }}</p>
          <p class="text-2xl z-10">{{ data.company }}</p>
        </div>
      </div>
      <!-- <exp_item v-for="item in expItems" :experience="item" /> -->
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
