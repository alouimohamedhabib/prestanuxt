<template>
  <Search />
  <Banner :images="imagesArray" />
  <NewArrivals />
</template>

<script setup lang="ts">
import { bootstrapPath } from "../config/APIRoutes";
import { usePageStore } from "../store";

const imagesArray = ["hahaha", "tatatat"];
const pageStore = usePageStore();
pageStore.init(bootstrapPath);
</script>
