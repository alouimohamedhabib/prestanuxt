<template>
  <div class="container mt-3 mb-3 product">
    <div class="row">
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
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "~~/src/store";
const PDPStore = useProductStore();
const productDetails = PDPStore.getProductDetails;
const qty: Ref<number> = ref(0);
const quantityUpdateInterceptor = (quantitySelection: number) => {
  console.log(quantitySelection);
  qty.value = quantitySelection;
};
</script>

<style lang="scss" scoped>
.product {
  --options {
    &__size {
    }
    &__colors {
    }
  }
}
</style>
