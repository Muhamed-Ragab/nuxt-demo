<template>
  <section class="container space-y-8 py-16 text-center">
    <article class="space-y-8">
      <p class="text-5xl">Coupons</p>
      <p class="text-5xl">Coming Soon</p>
      <p class="text-lg font-bold text-[#65b455]">
        Be An Active Member In Building A Better Future
      </p>

      <div class="text-[#949798]">
        <p>
          Join Our Journey In Building Schools And Hospitals And Supporting The
          Education Process.
        </p>
        <p>
          For An Annual Contribution Of $20, You'll Get A Wide Range Of
          Exclusive Coupons And
        </p>
        <p>Become An Active Member In Building A Better Future.</p>
        <p>Together, We Can Make A Difference.</p>
      </div>

      <NuxtLink to="/" class="block text-lg text-[#65b455] underline"
        >Read More</NuxtLink
      >
    </article>

    <form @submit.prevent="" class="mx-auto max-w-lg space-y-4 text-left">
      <label for="email" class="text-lg font-bold text-[#6bb154]">
        Get notified when we launch
      </label>

      <div class="flex items-center">
        <input
          id="email"
          type="email"
          class="w-full rounded-l bg-[#323536] px-5 py-3 placeholder:text-gray-400 focus:outline-none"
          placeholder="Enter your email"
        />

        <button
          class="rounded-r bg-[#65b844] px-14 py-3 duration-300 hover:bg-[#4a8931]"
        >
          Subscribe
        </button>
      </div>

      <p class="text-sm text-[#989a9f]">
        * Will send you weekly updates for your better tool management.
      </p>
    </form>
  </section>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "BisConnect | Home",
  description:
    "Welcome to BisConnect, your gateway to exclusive coupons, events, and more. Join us in building a better future.",
  keywords: "BisConnect, home, coupons, events, better future",
  ogTitle: "BisConnect | Home",
  ogDescription:
    "Welcome to BisConnect, your gateway to exclusive coupons, events, and more. Join us in building a better future.",
  ogImage: "/favicon.ico",
  ogType: "website",
  ogSiteName: "BisConnect",
  twitterCard: "summary_large_image",
  twitterTitle: "BisConnect | Home",
  twitterDescription:
    "Welcome to BisConnect, your gateway to exclusive coupons, events, and more. Join us in building a better future.",
  twitterCreator: "@BisConnect",
});
</script>
