<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useLocalizedSeo('meta.contact.title', 'meta.contact.description')

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
</script>

<template>
  <div class="container mx-auto px-6 py-24 max-w-4xl">
    <h1 class="text-4xl font-semibold mb-8 text-zinc-900" v-motion-slide-visible-once-bottom>{{ t('contact.title') }}</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Info -->
      <div class="space-y-8" v-motion-slide-visible-once-bottom :delay="100">
        <p class="text-zinc-600 text-lg">
          {{ t('contact.intro') }}
        </p>

        <div class="flex items-center space-x-4 text-zinc-600">
          <div class="p-3 rounded-full bg-primary/10 text-primary">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <a href="mailto:markus@von-staden.net" class="hover:text-primary transition-colors">markus@von-staden.net</a>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="card p-8" v-motion-slide-visible-once-bottom>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-zinc-700 mb-2">{{ t('contact.form.name') }}</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              required
              class="input-field"
              :placeholder="t('contact.form.name_placeholder')"
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-zinc-700 mb-2">{{ t('contact.form.email') }}</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              class="input-field"
              :placeholder="t('contact.form.email_placeholder')"
            >
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-zinc-700 mb-2">{{ t('contact.form.message') }}</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="4"
              class="input-field resize-none"
              :placeholder="t('contact.form.message_placeholder')"
            ></textarea>
          </div>

          <div v-if="error" class="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
            {{ error }}
          </div>

          <div v-if="success" class="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
            {{ t('contact.form.success') }}
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="btn-primary w-full"
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
