// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/stylesheets/main.scss'],
  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'ko', language: 'ko-KR' }
    ],
    defaultLocale: 'en',
  }
})