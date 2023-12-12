// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  build: {
    transpile: ["vuetify", "gsap"]
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/global.scss";',
        },
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'AMBIENT KYOTO 2023',
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&family=Noto+Sans+JP:wght@400;500&display=swap",
        },
      ],
    }
  },
  devtools: { enabled: true }
});
