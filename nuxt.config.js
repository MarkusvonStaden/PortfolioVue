export default defineNuxtConfig({
  compatibilityDate: '2026-03-11',
  future: {
    compatibilityVersion: 4,
  },
  srcDir: 'src/',
  css: [
    '@fontsource/inter/400.css',
    '@fontsource/inter/500.css',
    '@fontsource/inter/600.css',
    '@fontsource/inter/700.css',
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
