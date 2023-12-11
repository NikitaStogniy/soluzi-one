import { defineNuxtConfig } from 'nuxt/config'
import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'SoluziOne',
      link: [{ rel: 'icon', type: 'image/*', href: '/favicon.svg' }]
    }
  },
  css: ['~/assets/scss/main.scss', 'vue-final-modal/style.css'],
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt',
    ['@nuxtjs/google-fonts', {
      googleFonts: {
        download: false
      },
      families: {
        Roboto: true,
        Inter: [400, 500, 700],
      }
    }]
  ],
  build: {
    transpile: ['vue-i18n']
  },
  vite: {
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            componentPrefix: ''
          })
        ],
        dts: true
      })
    ],
  },
})
