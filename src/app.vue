<template>
  {{ product.product }}
</template>

<script setup lang="ts">
import { useProductStore } from "./store/product";
const product = useProductStore();
</script>
