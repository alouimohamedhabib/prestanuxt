<template>
  <div class="row">
    <div class="col-12">
      <h1>
        {{ $t("checkout.payment.title") }}
      </h1>
    </div>
    <div class="col-12">
      <template v-for="(paymentOption, index) in paymentOptions" :key="index">
        <template v-for="(paymentItem, i) in paymentOption" :key="i">
          <div class="form-check paymentItem">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              :id="paymentItem.id"
              @click="handlePaymentItemSelection(paymentItem)"
            />
            <label class="form-check-label" :for="paymentItem.id">
              {{ paymentItem.call_to_action_text }}
            </label>
            <p
              class="paymentItem--additionals"
              v-html="paymentItem.additionalInformation"
              v-if="paymentItem.id === selectedPaymentOption?.id"
            ></p>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCheckoutStore } from "~~/src/store";
import { PSPaymentOption } from "~~/src/types/PaymentOptionsType";
const checkoutStore = useCheckoutStore();
const selectedPaymentOption: Ref<PSPaymentOption | undefined> = ref(undefined);
const handlePaymentItemSelection = (paymentOption: PSPaymentOption) => {
  selectedPaymentOption.value = paymentOption;
};
onNuxtReady(() => checkoutStore.fetchPaymentOptions());
const paymentOptions = computed(() => checkoutStore.getPaymentOptions);
</script>
<style lang="scss" scoped>
.paymentItem {
  &--additionals {
    font-size: 0.6em;
    border: 1px solid lightgrey;
    padding: 1em;
    margin: 10px 0;
    border-radius: 5px;
    color: #646464;
    font-family: monospace;
  }
}
</style>
