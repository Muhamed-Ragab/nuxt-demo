<template>
  <header class="bg-[#242527] text-white">
    <nav class="container flex items-center justify-between py-4">
      <div class="flex items-center gap-8">
        <Icon name="mdi:menu" size="28" class="cursor-pointer text-white" />
        <h3 class="text-lg">BisConnect</h3>
      </div>

      <ul class="flex gap-8 max-md:hidden md:gap-4">
        <li v-for="link in links" :key="link.text">
          <NuxtLink
            :to="link.to"
            class="relative cursor-pointer py-2 font-semibold text-[#65b455] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-[#65b455] after:duration-300 hover:after:w-full"
            active-class="after:w-full"
          >
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>

      <button
        class="rounded-xl border border-transparent bg-[#65b844] px-14 py-3 text-lg duration-300 hover:border hover:border-[#65b844] hover:bg-transparent"
      >
        Login
      </button>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const links = [
  { text: "Home", to: "/" },
  { text: "History", to: "/about" },
  { text: "Calendar", to: "/calendar" },
  { text: "Coupons", to: "/coupons" },
  { text: "Events", to: "/events" },
];

const route = useRoute();
</script>

<style></style>
