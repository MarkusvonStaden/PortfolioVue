<script setup>
import { useModal } from "../../composables/useModal";
import { marked } from "marked";

const modal = useModal();
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        v-if="modal.show.value"
        @click.self="modal.hideModal()"
        @keydown.esc="modal.hideModal()"
        tabindex="0"
      >
        <div
          class="relative w-full max-w-3xl max-h-[85vh] bg-dark-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up"
        >
          <!-- Gradient Border Wrapper -->
          <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-white/5 pointer-events-none"></div>

          <!-- Floating Close Button -->
          <button
            class="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-dark-800/80 hover:bg-dark-700 backdrop-blur-sm rounded-full transition-all duration-200 shadow-lg border border-white/10"
            @click="modal.hideModal()"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Content -->
          <div class="overflow-y-auto p-8 md:p-12 custom-scrollbar relative z-10">
            <article
              class="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-slate-300 prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl prose-img:shadow-lg"
              v-html="marked.parse(modal.modalContent.value)"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
