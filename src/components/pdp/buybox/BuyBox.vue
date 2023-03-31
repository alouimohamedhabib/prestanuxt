<template>
  <div class="container mt-3 mb-3">
    <div class="row">
      <div class="col-8">
        <h1>{{ productDetails.name }}</h1>
      </div>
      <div class="col-4">
        <PdpBuyboxQuantityControl
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
</script>
