<template>
  <div v-for="(order, index) in ordersHistory" :key="index">
    {{ order.total_paid }}
  </div>
</template>
<script setup lang="ts">
import { useOrderStore } from "~~/src/store";
const orderStore = useOrderStore();
orderStore.fetchOrdersHistory();
const ordersHistory = computed(() => orderStore.getOrdersHistory);
</script>
