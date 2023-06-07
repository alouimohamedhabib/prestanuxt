<template>
  <div class="row">
    <div class="col-12">
      <h1>
        {{ $t("checkout.payment.title") }}
      </h1>
    </div>
    <div class="col-12">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCheckoutStore } from "~~/src/store";
const checkoutStore = useCheckoutStore();
onNuxtReady(() => checkoutStore.fetchPaymentOptions());
const paymentOptions = computed(() => checkoutStore.getPaymentOptions);
</script>
