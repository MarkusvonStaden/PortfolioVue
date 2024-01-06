<script setup>
import { useModal } from "../../composables/useModal";
import { marked } from "marked";

const modal = useModal();
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
          class="flex flex-col h-3/4 w-3/4 overflow-hidden bg-gray-800 rounded-2xl bg-clip-padding backdrop-filter bg-opacity-40 border border-slate-500 p-0 text-slate-200 place-items-center"
        >
          <div
            class="p-10 overflow-hidden prose-invert w-full max-h-full overflow-y-auto prose-lg prose-h2:font-mono prose-h2:text-lg prose-headings:m-0 prose-h2:mb-5 prose-img:rounded no-scrollbar"
            v-html="marked.parse(modal.modalContent.value)"
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg my-3"
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
