<script setup>
import { useModal } from "../../composables/useModal";
import { marked } from "marked";

const modal = useModal();
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        class="fixed top-0 left-0 w-screen h-screen z-50 grid place-items-center bg-black bg-opacity-30 backdrop-blur-lg"
        v-if="modal.show.value"
        @click.self="modal.hideModal()"
        @keydown.esc="modal.hideModal()"
        tabindex="0"
        focus
      >
        <div
          class="max-h-screen min-w-3/4 overflow-hidden bg-gray-700 lg:rounded-2xl bg-clip-padding backdrop-filter bg-opacity-80 p-0 text-slate-200 relative"
        >
          <div
            class="w-full h-8 bg-gradient-to-t from-transparent to-gray-700 top-0 absolute my-0 mx-auto left-1/2 -translate-x-1/2"
          />

          <article
            class="p-10 pb-16 overflow-y-auto prose-invert max-h-screen lg:max-h-[80vh] prose prose-lg prose-h2:font-mono prose-h2:text-lg prose-headings:m-0 prose-h2:mb-5 prose-img:rounded list-disc max-w-3xl no-scrollbar"
            v-html="marked.parse(modal.modalContent.value)"
          />
          <div
            class="w-full bg-gradient-to-b from-transparent to-gray-800 bottom-0 absolute my-0 mx-auto left-1/2 -translate-x-1/2"
          >
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded-lg relative left-1/2 transform -translate-x-1/2"
              @click="modal.hideModal()"
            >
              Close
            </button>
          </div>
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
