<template>
  <div class="container order">
    <h1 class="mt-3 mb-3 col-12">
      {{ $t("order.history_title") }}
    </h1>
    <h2 class="mb-3">
      {{ $t("order.history_subtitle") }}
    </h2>
    <template v-for="(order, index) in ordersHistory" :key="index">
      <div class="row mb-4">
        <div class="col-12 order--refrence fw-bold mb-2">
          <NuxtLink :to="'/account/orders/' + order.id_order"
            >#{{ order.reference }}
          </NuxtLink>
        </div>
        <div class="col-12 order--data mb-2">{{ order.date_add }}</div>
        <div class="col-12 order--total mb-2">
          {{ parseInt(order.total_paid).toFixed(2) }}
        </div>
        <div class="col-12 order--state mb-2">
          <span
            class="rounded p-2"
            :style="{
              backgroundColor: order.order_state_color,
            }"
            >{{ order.order_state }}</span
          >
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { useOrderStore } from "~~/src/store";
const orderStore = useOrderStore();
onNuxtReady(() => {
  orderStore.fetchOrdersHistory();
});
const ordersHistory = computed(() => orderStore.getOrdersHistory);
</script>

<style lang="scss" scoped>
.order {
  font-size: 1em;
  h1 {
    font-size: 1.2em;
  }
  h2 {
    font-size: 0.8em;
    opacity: 0.7;
  }
  h1 {
  }
  &--refrence {
  }
  &--data {
  }
  &--total {
  }
  &--state {
    span {
      font-size: 12px;
      color: white;
    }
  }
}
</style>
