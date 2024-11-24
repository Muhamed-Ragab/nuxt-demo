<template>
  <header class="bg-nav text-white duration-200">
    <nav class="container flex items-center justify-between py-4">
      <div class="contents items-center gap-8 sm:flex">
        <MenuSheet />
        <Logo />
      </div>

      <ul class="flex gap-16 max-lg:hidden">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLink
            :to="link.to"
            class="relative cursor-pointer py-2 font-semibold text-primary transition-all after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-primary after:duration-300 hover:text-primaryHover hover:after:w-full"
            active-class="after:w-full"
          >
            {{ link.name }}
            <i class="icon link.icon"></i>
          </NuxtLink>
        </li>
      </ul>

      <NuxtLink
        class="rounded-xl border border-transparent text-lg duration-300 hover:border hover:border-primaryHover hover:bg-transparent max-sm:text-primary sm:bg-primary sm:px-14 sm:py-3"
        to="/"
      >
        Login
      </NuxtLink>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import MenuSheet from "./MenuSheet.vue";

const navLinks = [
  { name: "Home", icon: "", to: "/" },
  { name: "History", icon: "", to: "/about" },
  { name: "Calendar", icon: "", to: "/calendar" },
  { name: "Coupons", icon: "", to: "/coupons" },
  { name: "Events", icon: "", to: "/events" },
];
</script>
