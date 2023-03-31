<template>
  <div class="container">
    <div class="row">
      <div class="col-6 fw-bold">
        {{ $t("newArrivals") }}
      </div>
      <div class="col-6">
        <NuxtLink :to="'/'" class="d-block text-end">{{
          $t("viewAll")
        }}</NuxtLink>
      </div>
    </div>
    <div>
      <div class="row">
        <template
          v-for="(productItem, index) in newArrivalsProducts"
          :key="index"
        >
          <PlpMiniature :product="productItem" class="col-6" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from "../store";

const pageStore = usePageStore();
// get new products
const newArrivalsProducts = computed(() => pageStore.getPageFeaturedProducts);
</script>
