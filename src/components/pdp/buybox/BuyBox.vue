<template>
  <div class="container mt-3 mb-3 product">
    <div class="row">
      <!-- producty info and quantity control -->
      <div class="col-8">
        <h1>{{ productDetails.name }}</h1>
      </div>
      <div class="col-4">
        <PdpBuyboxQuantityControl
          @quantityUpdate="quantityUpdateInterceptor"
          :quantity="productDetails.quantity"
          :minimal_quantity="productDetails.minimal_quantity"
          :available_for_order="productDetails.available_for_order"
          :allow_out_of_stock="productDetails.allow_out_of_stock"
          :disableWatchKeyUp="false"
        />
      </div>
      <!-- productOptions -->
      <div class="col-12">
        <PdpBuyboxProductOptions />
      </div>
      <!-- product description -->
      <div class="col-12 product--description">
        <h3>
          {{ $t("description") }}
        </h3>
        <p v-html="productDetails.description"></p>
      </div>
      <!-- product price && add to cart -->
      <div class="col-12">
        <div class="row">
          <div class="col-4 product--price">
            <span>{{ $t("product.total_price") }}</span>
            <p>
              {{ ProductPrice(productDetails) }}
            </p>
          </div>
          <div class="col-8 text-end">
            <PdpBuyboxAddToCart :qty="qty" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~~/src/store";
import ProductPrice from "../../../helpers/ProductPrice";

const PDPStore = useProductStore();
const productDetails = computed(() => PDPStore.getProductDetails);
const qty: Ref<number> = ref(
  parseInt(productDetails.value.minimal_quantity) || 0
);
const quantityUpdateInterceptor = (quantitySelection: number) => {
  qty.value = quantitySelection;
};
</script>

<style lang="scss" scoped>
.product {
  &--description {
    margin-top: 2em;
    font-size: 11px;
    h3 {
      font-size: 16px;
      font-weight: bold;
    }
  }
  &--price {
    span {
      font-size: 9px;
      display: block;
    }
    p {
      font-size: 18px;
      font-weight: bold;
    }
  }
  &--options {
    &__size {
    }
    &__colors {
    }
  }
}
</style>
