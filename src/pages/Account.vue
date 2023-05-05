<template>
  <NuxtPage />
  <AccountLanding v-if="$route.name === 'Account'" />
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["account-guard"],
});
</script>
