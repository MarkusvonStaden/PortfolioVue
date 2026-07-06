<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'

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
  <div class="max-w-2xl mx-auto px-6 py-12 md:py-16">
    <header v-motion-slide-visible-once-bottom>
      <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">{{ t('contact.title') }}</h1>
      <p class="mt-4 text-lg text-zinc-500 leading-relaxed">
        {{ t('contact.intro') }}
      </p>
      <a
        href="mailto:markus@von-staden.net"
        class="group mt-6 inline-flex items-center gap-2 text-zinc-600 hover:text-primary transition-colors"
      >
        <EnvelopeIcon class="h-5 w-5 text-zinc-400 group-hover:text-primary transition-colors" aria-hidden="true" />
        markus@von-staden.net
      </a>
    </header>

    <form
      @submit.prevent="submitForm"
      class="mt-10 border-t border-zinc-200 pt-10 space-y-6"
      v-motion-slide-visible-once-bottom
    >
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
        class="btn-primary"
      >
        <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        {{ loading ? t('contact.form.sending') : t('contact.form.submit') }}
      </button>
    </form>
  </div>
</template>
