<template>
  <Search />
  <Banner />
  <NewArrivals />
</template>

<script setup lang="ts">
import { bootstrapPath } from "../config/APIRoutes";
import { usePageStore } from "../store";
const pageStore = usePageStore();
pageStore.init(bootstrapPath);
const { locales } = useI18n();
</script>
