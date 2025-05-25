// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      qiitaApiBaseUrl: process.env.QIITA_API_BASE_URL,
    },
  },
  css: [
    "modern-css-reset", // modern.cssを指定
  ],
  plugins: ["@/plugins/qiitaApi.ts"],
});
