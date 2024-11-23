<template>
  <div>
    <h1>Post {{ route.params.id }}</h1>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>

<style></style>
