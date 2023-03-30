<template>
  {{ id }}
</template>
<script lang="ts" setup>
import carousel from "vue-owl-carousel";
import { productdetailPath } from "../config/APIRoutes";
import { useProductStore } from "../store";
const route = useRoute();
const PDPStore = useProductStore();
const { id } = route.params;
PDPStore.init(productdetailPath, { product_id: id, image_type: "large" });
</script>
