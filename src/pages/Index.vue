<template>
  <Search />
  <Banner :images="imagesArray" />
  <NewArrivals />
</template>

<script setup lang="ts">
import { usePageStore } from "../store";
import PagesNamesEnum from "../types/pagesType";
const imagesArray = ["hahaha", "tatatat"];
const pageStore = usePageStore();
pageStore.init(PagesNamesEnum.hp);
</script>
