// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  app: {
    head: {
      script: [
        {
          src: 'https://kit.fontawesome.com/0f0f3a9c9b.js',
          crossorigin: 'anonymous',
        },
        
        
      ],
    }
})
