// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  app: {
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-D257LNRCHS',
          async: true,
        },
        {
          children: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-D257LNRCHS');
          `,
        },
      ],
    },
  },
})
