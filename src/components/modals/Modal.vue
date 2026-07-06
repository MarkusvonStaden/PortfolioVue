<script setup>
import { useModal } from "../../composables/useModal";

const modal = useModal();
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/30 backdrop-blur-sm"
        v-if="modal.show.value"
        @click.self="modal.hideModal()"
        @keydown.esc="modal.hideModal()"
        tabindex="0"
      >
        <div
          class="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up border border-zinc-200"
        >
          <!-- Floating Close Button -->
          <button
            class="absolute top-4 right-4 z-20 p-2 text-zinc-500 hover:text-zinc-900 bg-white hover:bg-zinc-100 rounded-full transition-colors duration-200 shadow-sm border border-zinc-200"
            @click="modal.hideModal()"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Content -->
          <div class="overflow-y-auto p-8 md:p-12 custom-scrollbar relative z-10">
            <div v-if="modal.modalContent.value">
              <h2 class="text-3xl font-semibold text-zinc-900 mb-2">{{ modal.modalContent.value.title }}</h2>
              <p class="text-xl text-primary font-medium mb-6">{{ modal.modalContent.value.company }}</p>

              <div class="prose prose-zinc prose-lg max-w-none text-zinc-600 mb-8">
                <p>{{ modal.modalContent.value.description }}</p>
              </div>

              <div v-if="modal.modalContent.value.projects && modal.modalContent.value.projects.length > 0">
                <h3 class="text-2xl font-semibold text-zinc-900 mb-6">{{ modal.modalContent.value.sectionTitle || 'Projects' }}</h3>
                <div class="grid gap-6">
                  <div
                    v-for="(project, index) in modal.modalContent.value.projects"
                    :key="index"
                    class="bg-zinc-50 rounded-xl p-6 border border-zinc-200 hover:border-zinc-300 transition-colors"
                  >
                    <h4 class="text-xl font-semibold text-zinc-900 mb-2">{{ project.title }}</h4>
                    <p class="text-zinc-600">{{ project.description }}</p>
                  </div>
                </div>
              </div>
              <div v-if="modal.modalContent.value.documents && modal.modalContent.value.documents.length > 0" class="mt-8 pt-8 border-t border-zinc-200">
                <h3 class="text-xl font-semibold text-zinc-900 mb-4">{{ $t('portfolio.documents') || 'Documents' }}</h3>
                <div class="flex flex-wrap gap-4">
                  <a
                    v-for="(doc, index) in modal.modalContent.value.documents"
                    :key="index"
                    :href="doc.file"
                    target="_blank"
                    class="flex items-center gap-3 px-4 py-3 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl transition-colors duration-300 group"
                  >
                    <div class="p-2 bg-primary/10 rounded-lg text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span class="text-zinc-700 font-medium group-hover:text-zinc-900 transition-colors">{{ doc.title }}</span>
                  </a>
                </div>
              </div>
            </div>
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
  background: rgba(0, 0, 0, 0.15);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.25);
}
</style>
