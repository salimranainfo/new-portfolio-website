// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  app: {
    head: {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-785084983',
          async: true,
        },
        {
          children: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-785084983');
          `,
        },
      ],
      title: 'SR Web Studio',
      meta: [
        {
          name: 'description',
          content:
            'SR Web Studio is a small agency of web developers and designers who work together to build websites for their clients. They use agile, devops, and other best practices to create websites that are beautiful, functional, and user-friendly.',
        },
        {
          name: 'keywords',
          content:
            'web development, web design, web agency, agile, devops, website creation, website maintenance, website optimization, SR Web Studio',
        },
        {
          name: 'og:title',
          content: 'SR Web Studio',
        },
        {
          name: 'og:description',
          content:
            'SR Web Studio is a small agency of web developers and designers who work together to build websites for their clients. They use agile, devops, and other best practices to create websites that are beautiful, functional, and user-friendly.',
        },
        {
          name: 'og:image',
          content: '/og_image.jpg',
        },
        {
          name: 'og:url',
          content: 'https://srwebstudio.com',
        },
        {
          name: 'og:site_name',
          content: 'SR Web Studio',
        },
        {
          name: 'og:locale',
          content: 'en_US',
        },
        {
          name: 'og:type',
          content: 'website',
        },
      ],
    },
  },
})
