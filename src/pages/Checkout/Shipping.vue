<template>
  <CheckoutShippingAddressSelector
    :addresses="addresses"
    @addr-changes="handleAddChanges"
  />
  <CheckoutShippingSelectedAddressDetails
    :address-info="getSelectedAddressInformation()"
  />
  <div class="row mt-5 pt-4">
    <div class="col-6">
      <div class="total-price">
        <span>
          {{ $t("checkout.cart.total_price") }}
        </span>
        <b> {{ totalPrice }} </b>
      </div>
    </div>
    <div class="col-6">
      <NuxtLink
        class="dark-button"
        to="/checkout/delivery"
        :class="{
          disabled: !checkoutStore.getSelectedShippingAddress,
        }"
        >{{ $t("checkout.delivery.cta") }}</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore, useCheckoutStore } from "~~/src/store";
import { AddressType } from "~~/src/types/AddressType";
const checkoutStore = useCheckoutStore();
const cartStore = useCartStore();
onNuxtReady(() => {
  checkoutStore.fetchAddresses();
});
const addresses: ComputedRef<(AddressType | undefined)[]> = computed(() =>
  Object.values(checkoutStore.getAddresses || [])
);
const totalPrice = computed(() => cartStore.getCartObject?.totals?.total.value);
const handleAddChanges = (id: number) => {
  checkoutStore.setSelectedShippingAddress(id);
};
const getSelectedAddressInformation = (): AddressType | undefined => {
  return addresses.value.filter(
    (item) =>
      parseInt(item?.id || "") === checkoutStore.getSelectedShippingAddress
  )[0];
};
</script>
