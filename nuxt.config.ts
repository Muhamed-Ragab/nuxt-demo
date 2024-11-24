// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/auto-animate",
    "@nuxt/icon",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "nuxt-swiper",
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

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === "production"
          ? { preset: ["default", { discardComments: { removeAll: true } }] }
          : {},
    },
  },
  ssr: true,
});