<template>
  <div class="product mt-2 mb-2 position-relative">
    <NuxtLink :to="productUrl(product)">
      <i class="bi bi-suit-heart product--favorite"></i>
      <img
        class="product--thumbnail mb-2"
        :src="product?.default_image.url"
        :alt="product?.name"
      />
    </NuxtLink>
    <h2 class="product--name">
      {{ product?.name }}
    </h2>
    <h3 class="product--category">
      {{ product?.category_name }}
    </h3>
    <p class="product--price">
      {{ product?.price }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import { FeaturedProductType } from "~~/src/types/FeaturedProductType";
import { ProductType } from "../../../types/ProductType";

// get product details
defineProps({
  product: {
    type: Object as PropType<FeaturedProductType>,
  },
});

// men/1-1-hummingbird-printed-t-shirt.html
function productUrl(product: FeaturedProductType | undefined) {
  if (!product) return "";
  return `/${product.category_name}/${product.id_product}-${product.link_rewrite}`;
}
</script>

<style lang="scss">
.product {
  line-height: 1.2em;
  font-family: Poppins;
  text-align: center;
  &--favorite {
    position: absolute;
    top: 10px;
    right: 20px;
    background-color: #000000;
    padding: 5px;
    border-radius: 100%;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      font-size: 10px;
    }
  }
  &--thumbnail {
    border-radius: 20px;
  }
  &--name {
    font-size: 14px;
    font-weight: 600;
  }
  &--category {
    font-size: 11px;
    font-weight: 400;
  }
  &--price {
    font-size: 11px;
    font-weight: 600;
  }
}
</style>
