<script setup>
import { useModal } from "../../composables/useModal";

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
          class="relative w-full max-w-3xl max-h-[85vh] bg-dark-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-up border border-white/10"
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
            <div v-if="modal.modalContent.value">
              <h2 class="text-3xl font-display font-bold text-white mb-2">{{ modal.modalContent.value.title }}</h2>
              <p class="text-xl text-primary font-medium mb-6">{{ modal.modalContent.value.company }}</p>
              
              <div class="prose prose-invert prose-lg max-w-none text-slate-300 mb-8">
                <p>{{ modal.modalContent.value.description }}</p>
              </div>

              <div v-if="modal.modalContent.value.projects && modal.modalContent.value.projects.length > 0">
                <h3 class="text-2xl font-display font-bold text-white mb-6">{{ modal.modalContent.value.sectionTitle || 'Projects' }}</h3>
                <div class="grid gap-6">
                  <div 
                    v-for="(project, index) in modal.modalContent.value.projects" 
                    :key="index"
                    class="bg-white/5 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <h4 class="text-xl font-bold text-white mb-2">{{ project.title }}</h4>
                    <p class="text-slate-400">{{ project.description }}</p>
                  </div>
                </div>
              </div>
              <div v-if="modal.modalContent.value.documents && modal.modalContent.value.documents.length > 0" class="mt-8 pt-8 border-t border-white/10">
                <h3 class="text-xl font-display font-bold text-white mb-4">{{ $t('portfolio.documents') || 'Documents' }}</h3>
                <div class="flex flex-wrap gap-4">
                  <a 
                    v-for="(doc, index) in modal.modalContent.value.documents" 
                    :key="index"
                    :href="doc.file" 
                    target="_blank"
                    class="flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group"
                  >
                    <div class="p-2 bg-primary/20 rounded-lg text-primary group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span class="text-slate-300 font-medium group-hover:text-white transition-colors">{{ doc.title }}</span>
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
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
