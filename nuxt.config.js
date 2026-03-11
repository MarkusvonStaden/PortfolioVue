export default defineNuxtConfig({
  compatibilityDate: '2026-03-11',
  future: {
    compatibilityVersion: 4,
  },
  srcDir: 'src/',
  css: [
    '@fontsource/space-grotesk',
    '@/index.css',
  ],
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
