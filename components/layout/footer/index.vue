<template>
  <footer class="bg-footer py-8 text-footerText">
    <section
      class="container grid grid-cols-1 gap-8 py-5 max-sm:border-b-2 max-sm:border-borderTwo md:grid-cols-2 lg:grid-cols-5"
    >
      <ul
        class="space-y-4 pb-5 max-sm:border-b max-sm:border-borderTwo max-sm:text-center"
      >
        <li class="text-lg font-semibold">Shop</li>
        <li class="text-lg font-semibold">
          <NuxtLink to="/">Download App</NuxtLink>
        </li>
      </ul>
      <ul
        class="space-y-4 pb-5 max-sm:border-b max-sm:border-borderTwo max-sm:text-center"
      >
        <li class="text-lg font-semibold">Info</li>
        <li class="text-lg font-light">
          <NuxtLink to="/">About</NuxtLink>
        </li>
        <li class="text-lg font-light">
          <NuxtLink to="/">Careers</NuxtLink>
        </li>
        <li class="text-lg font-light">
          <NuxtLink to="/">Contact Us</NuxtLink>
        </li>
        <li class="text-lg font-light">
          <NuxtLink to="/">Blogs</NuxtLink>
        </li>
        <li class="text-lg font-light">
          <NuxtLink to="/">Newsletter</NuxtLink>
        </li>
      </ul>
      <ul
        class="space-y-4 pb-5 max-sm:border-b max-sm:border-borderTwo max-sm:text-center"
      >
        <li class="text-lg font-semibold">Social Media</li>
        <li class="text-lg font-light">
          <NuxtLink to="/">Youtube</NuxtLink>
        </li>
        <li class="text-lg font-light">
          <NuxtLink to="/">Instagram</NuxtLink>
        </li>
        <li class="text-lg font-light">
          <NuxtLink to="/">Facebook</NuxtLink>
        </li>
      </ul>
      <ul
        class="space-y-4 pb-5 max-sm:border-b max-sm:border-borderTwo max-sm:text-center"
      >
        <li class="text-lg font-semibold">Privacy</li>
        <li class="text-lg font-light">
          <NuxtLink to="/">Terms of Service</NuxtLink>
        </li>
        <li class="text-lg font-light">
          <NuxtLink to="/">Privacy Policy</NuxtLink>
        </li>
        <li class="text-lg font-light">
          <NuxtLink to="/">About Bisconnect</NuxtLink>
        </li>
      </ul>
      <ul class="space-y-4 pb-5 text-center">
        <li class="text-lg font-semibold">Help</li>
        <li class="text-lg font-light">
          <NuxtLink to="/">Send feedback</NuxtLink>
        </li>
        <li class="text-lg font-light">
          <NuxtLink to="/">FAQ</NuxtLink>
        </li>
        <li class="text-lg font-light">
          <NuxtLink to="/">Support</NuxtLink>
        </li>
        <li class="text-lg font-light">
          <NuxtLink to="/">Help</NuxtLink>
        </li>
      </ul>
    </section>

    <article
      class="container flex flex-col items-center justify-between py-4 md:flex-row"
    >
      <div class="flex-1 max-sm:hidden">
        <Logo />
      </div>

      <form
        @submit.prevent=""
        class="flex-1 space-y-4 py-4 text-center sm:text-left"
      >
        <label for="email" class="text-xl font-bold">
          Join Our Newsletter
        </label>

        <div
          class="flex items-center overflow-hidden rounded border border-white"
        >
          <input
            id="email"
            type="email"
            class="w-full bg-white px-5 py-4 text-gray-500 placeholder:text-gray-400 focus:outline-none"
            placeholder="Enter your email"
          />

          <button
            class="bg-[#62b846] px-8 py-4 duration-300 hover:bg-[#4a8931]"
          >
            Subscribe
          </button>
        </div>

        <p class="text-[#d5f9ce] sm:text-sm">
          * Will send you weekly updates for your better tool management.
        </p>
      </form>
    </article>
    <p class="mt-8 text-center text-sm text-[#c5f4bf]">
      All Rights Reserved BisConnect @ 2024
    </p>
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>
