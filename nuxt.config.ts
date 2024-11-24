// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    // viewTransition: true,
  },
  tailwindcss: {
    config: {
      theme: {
        container: {
          center: true,
          padding: "2rem",
        },
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@formkit/auto-animate", "@nuxt/icon"],
  ssr: true,
});
