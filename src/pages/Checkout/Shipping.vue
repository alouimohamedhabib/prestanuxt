<template>
  <CheckoutShippingAddressSelector :addresses="addresses" />
</template>

<script setup lang="ts">
import { useCheckoutStore } from "~~/src/store";
import { AddressType } from "~~/src/types/AddressType";
const checkoutStore = useCheckoutStore();
onNuxtReady(() => {
  checkoutStore.fetchAddresses();
});
const addresses: ComputedRef<(AddressType | undefined)[]> = computed(() =>
  Object.values(checkoutStore.getAddresses || [])
);
</script>
