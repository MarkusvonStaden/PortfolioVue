import { ref } from 'vue'

const show = ref(false)
const modalContent = ref('')

async function loadMarkdown(path) {
    const response = await fetch(path);
    if (response.ok) {
        const text = await response.text();
        modalContent.value = text;
    } else {
        console.error('Fehler beim Laden der Markdown-Datei');
    }
}

export function useModal() {
    return {
        showModal: () => show.value = true,
        hideModal: () => show.value = false,
        updateModalContent: (content) => modalContent.value = loadMarkdown('content/' + content),
        show,
        modalContent
    }
}