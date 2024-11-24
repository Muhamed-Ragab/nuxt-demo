// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "~/assets/css/tailwind.css",
    "~/assets/css/icons.css",
    "~/assets/css/BisConnectFont-v4.8/style.css",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  tailwindcss: {
    configPath: "./tailwind.config.js",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/auto-animate",
    "@nuxt/icon",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  runtimeConfig: {
    public: {
      BACKEND_URL: process.env.BACKEND_URL,
    },
  },

  nitro: {
    future: {
      nativeSWR: true,
    },
  },
  ssr: true,
});
