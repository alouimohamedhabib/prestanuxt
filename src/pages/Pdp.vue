<template>
  <div v-if="productDetails">
    <PdpThumbnail
      v-if="productDetails.images.length > 1"
      :product-images="productDetails.images"
      :description_short="productDetails.description_short"
    />
    <PdpBuyboxBuyBox />
  </div>
</template>
<script lang="ts" setup>
import { productdetailPath } from "../config/APIRoutes";
import { useProductStore } from "../store";
const route = useRoute();
const PDPStore = useProductStore();
const { id } = route.params;
PDPStore.init(productdetailPath, { product_id: id, image_type: "large" });
const productDetails = computed(() => PDPStore.getProductDetails);
</script>

<style lang="scss">
.swiper-pagination {
  &-bullet {
    transition: all 200ms ease-in-out;
    &-active {
      width: 20px;
      border-radius: 10px;
      background-color: grey;
    }
  }
}
.swiper {
  &-button-prev,
  &-button-next {
    &:after {
      font-size: 12px;
      color: grey;
    }
  }
}
</style>
