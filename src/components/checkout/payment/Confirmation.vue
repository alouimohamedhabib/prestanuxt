<template>
  <div class="confirmation">
    <div class="row" v-if="successPaymentResponse?.addresses">
      <div class="col-12">
        <h1 class="alert alert-success fs-6" role="alert">
          {{ $t("checkout.payment.success") }}
        </h1>
        <h2
          v-if="successPaymentResponse?.history.current.send_email"
          class="fs-6"
        >
          {{
            $t("checkout.payment.email_sent", {
              p: customerInfo?.email,
            })
          }}
        </h2>
      </div>
      <div class="confirmation--order-details">
        <CheckoutPaymentOrderRecap v-bind:order="successPaymentResponse" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAccountStore, useCheckoutStore } from "~~/src/store";
import { OrderPaymentResponseType } from "~~/src/types/PaymentResponseType";
const checkoutStore = useCheckoutStore();
const successPaymentResponse: ComputedRef<OrderPaymentResponseType> = computed(
  () => checkoutStore.getPaymentSubmissionResponse
);

const failPaymentResponse = computed(
  () => checkoutStore.getPaymentSubmissionResponseError
);
const AccountStore = useAccountStore();
const customerInfo = computed(() => AccountStore.getAccountInfo);
</script>
<style lang="scss" scoped>
.confirmation {
  h2 {
    font-size: 0.7em;
    opacity: 0.6;
  }
  &--order-details {
  }
}
</style>
