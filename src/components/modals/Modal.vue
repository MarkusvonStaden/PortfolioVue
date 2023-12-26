<script setup>
import { useModal } from "../../composables/useModal";

const modal = useModal();
const modalRef = "ref(null)";
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        class="fixed top-0 left-0 w-screen h-screen z-50 grid place-items-center bg-black bg-opacity-20 backdrop-blur-lg"
        v-if="modal.show.value"
        @click.self="modal.hideModal()"
      >
        <div
          class="bg-gray-800 rounded-2xl bg-clip-padding backdrop-filter bg-opacity-40 border border-slate-500 w-3/4 h-3/4 p-10 text-slate-200 place-items-center flex flex-col"
        >
          <div class="w-full h-1/5">
            <h1 class="text-5xl font-sans font-thin">Teamlead Technology</h1>
            <p class="font-mono">Hochschule Aalen, Digital Learning Team</p>
          </div>
          <div class="flex h-3/5 flex-grow">
            <p class="font-sans w-3/4 h-full">
              As Team Lead for Technology in the Digital Learning Team at
              Hochschule Aalen, I spearhead the coordination and management of
              the technology team, focusing on the development and
              implementation of cutting-edge learning and teaching technologies.
              <br />
              My role involves overseeing digitalization projects of educational
              content, which includes budget planning and resource allocation. I
              collaborate closely with faculty and administrative staff to
              identify and implement technology solutions that enhance teaching
              and learning processes.
              <br />
              A key part of my job is to promote ongoing professional
              development and skill-building within the team through regular
              training sessions and workshops.
              <br />
              I also stay abreast of new technology trends in the educational
              sector, ensuring that Hochschule Aalen remains at the forefront of
              digital education innovation. Additionally, I am responsible for
              ensuring compliance with data protection and security standards in
              the implementation of digital learning tools.
            </p>
            <div class="w-1/4 h-full"></div>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            @click="modal.hideModal()"
          >
            Close
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.15s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
</style>
