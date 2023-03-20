<template>
  <div>
    <img :src="images?.image_url" alt="" />
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from "../store";
import { BannerType } from "../types/ApiType";

const pageStore = usePageStore();
const images: BannerType | undefined = pageStore.getHomepageImages;
</script>

<style lang="scss" scoped>
img {
  max-width: 100vw;
}
</style>
