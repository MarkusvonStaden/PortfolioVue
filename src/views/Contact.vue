<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref(null)

const submitForm = async () => {
  loading.value = true
  error.value = null
  success.value = false

  try {
    const response = await fetch('/sendmessage.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    const data = await response.json()

    if (data.success) {
      success.value = true
      form.value = { name: '', email: '', message: '' }
    } else {
      error.value = data.message || t('contact.form.error')
    }
  } catch (e) {
    error.value = t('contact.form.error')
  } finally {
    loading.value = false
  }
}

const handleMouseMove = (e) => {
  const cards = document.getElementsByClassName('bento-card')
  for (const card of cards) {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }
}
</script>

<template>
  <div class="container mx-auto px-6 py-24 max-w-4xl" @mousemove="handleMouseMove">
    <h1 class="text-4xl font-bold mb-8 text-white">{{ t('contact.title') }}</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Info -->
      <div class="space-y-8">
        <p class="text-slate-300 text-lg">
          {{ t('contact.intro') }}
        </p>
        
        <div class="flex items-center space-x-4 text-slate-300">
          <div class="p-3 rounded-full bg-primary/10 text-primary">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <a href="mailto:markus@von-staden.net" class="hover:text-white transition-colors">markus@von-staden.net</a>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bento-card p-8 rounded-2xl relative group">
        <div class="spotlight-overlay"></div>
        <form @submit.prevent="submitForm" class="space-y-6 relative z-10">
          <div>
            <label for="name" class="block text-sm font-medium text-slate-300 mb-2">{{ t('contact.form.name') }}</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required
              class="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              :placeholder="t('contact.form.name_placeholder')"
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-slate-300 mb-2">{{ t('contact.form.email') }}</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required
              class="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              :placeholder="t('contact.form.email_placeholder')"
            >
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-slate-300 mb-2">{{ t('contact.form.message') }}</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              required
              rows="4"
              class="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              :placeholder="t('contact.form.message_placeholder')"
            ></textarea>
          </div>

          <div v-if="error" class="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {{ error }}
          </div>

          <div v-if="success" class="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
            {{ t('contact.form.success') }}
          </div>

          <button 
            type="submit" 
            :disabled="loading"
            class="w-full py-3 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
          >
            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ loading ? t('contact.form.sending') : t('contact.form.submit') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spotlight-overlay {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.5s;
}

.bento-card:hover .spotlight-overlay {
  opacity: 1;
}
</style>
