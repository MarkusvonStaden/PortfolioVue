import { ref } from 'vue'

const show = ref(false)
const modalContent = ref('')

export function useModal() {
    return {
        showModal: () => show.value = true,
        hideModal: () => show.value = false,
        updateModalContent: (content) => modalContent.value = content,
        show,
        modalContent
    }
}