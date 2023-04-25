// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
      // The private keys which are only available server-side
      apiSecret: '123',
      // Keys within public are also exposed client-side
      public: {
        apiBase: '/api'
      }
    },

    css: [
        "primevue/resources/themes/lara-light-blue/theme.css",
        "primevue/resources/primevue.css",
        "@/assets/styles/main.scss"
    ],
    build: {
      transpile: ["primevue"]
    },

    vite: {
        css: {
          preprocessorOptions: {
                scss: {
                  additionalData: '@use "@/assets/styles/_variables.scss" as *;'
                },
            },
        },
    },

})
