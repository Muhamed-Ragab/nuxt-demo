<template>
  <div class="bg-Background min-h-screen text-white">
    <Header />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import Header from "~/components/layout/header";
import Footer from "~/components/layout/footer";

useSeoMeta({
  title: "BisConnect | Your Connection to a Better Future",
  description:
    "Explore BisConnect, your gateway to exclusive coupons, events, and more. Join us in building a better future.",
  keywords: "BisConnect, coupons, events, better future",
  ogTitle: "BisConnect | Your Connection to a Better Future",
  ogDescription:
    "Explore BisConnect, your gateway to exclusive coupons, events, and more. Join us in building a better future.",
  ogImage: "/favicon.ico",
  ogType: "website",
  ogSiteName: "BisConnect",
  twitterCard: "summary_large_image",
  twitterTitle: "BisConnect | Your Connection to a Better Future",
  twitterDescription:
    "Explore BisConnect, your gateway to exclusive coupons, events, and more. Join us in building a better future.",
  twitterCreator: "@BisConnect",
});
</script>

<style></style>
