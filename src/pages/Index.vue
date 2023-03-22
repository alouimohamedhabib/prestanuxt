<template>
  <Search />
  <Banner :images="imagesArray" />
  <NewArrivals />
</template>

<script setup lang="ts">
import { usePageStore } from "../store";
import { bootstrapPath } from "../config/ApiRoutes";
const imagesArray = ["hahaha", "tatatat"];
const pageStore = usePageStore();
pageStore.init(bootstrapPath);
</script>
