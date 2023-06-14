<template>
  <div class="orderDetails" v-if="order">
    <div class="row">
      <h1 class="mt-3 mb-3 col-12 orderDetails--infos">
        <span class="p-2 rounded mb-2 d-block border"
          >{{ $t("order.order_details.order") }}
          {{ order.details.reference }}</span
        >
      </h1>
      <div class="col-12">
        <div class="p-2 rounded border mb-2 d-block orderDetails--details">
          <div class="row">
            <!-- Transporter -->
            <div class="col-12">
              <b class="fs-6">Transporter</b>
            </div>
            <div class="col-12 opacity-50">
              {{ order.carrier.name }}
            </div>
            <!-- Carrier way -->
            <div class="spacer p-2 d-block"></div>
            <div class="col-12">
              <b class="fs-6">Paiement way</b>
            </div>
            <div class="col-12 opacity-50">
              {{ order.details.payment }}
            </div>
            <!-- Shpping address -->
            <div class="spacer p-2 d-block"></div>
            <div class="col-12">
              <b class="fs-6">Shipping address</b>
            </div>
            <div class="col-12 opacity-50">
              <b class="d-block fs-6">{{ order.addresses.delivery.alias }}</b>
              {{ order.addresses.delivery.address1 }}
              {{ order.addresses.delivery.city }}
              {{ order.addresses.delivery.postcode }}
            </div>
            <!-- Products -->
            <div class="spacer p-2 d-block"></div>
            <div class="col-12">
              <b class="fs-6">Products</b>
            </div>
            <div class="col-12">
              <table class="table orderDetails--products">
                <template
                  v-for="(product, index) in order.products"
                  :key="index"
                >
                  <tr class="mb-2 orderDetails--products-name">
                    <td class="opacity-75">{{ product.name }}</td>
                  </tr>
                  <tr class="d-flex mb-2">
                    <td class="opacity-50">
                      {{ $t("order.order_details.quantity") }}
                      <span>{{ product.quantity }}</span>
                    </td>
                    <td class="opacity-50">
                      {{ $t("order.order_details.item_price") }}
                      <span>{{ product.price }}</span>
                    </td>
                  </tr>
                </template>
              </table>
              <div class="spacer"></div>
              <strong>{{ $t("order.order_details.total") }} </strong>
              {{ order.amounts.totals.total.value }}
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mt-1">
        <div class="p-2 rounded border mb-2 d-block orderDetails--details">
          <div>
            <div class="shipping-line">
              <ul class="p-0">
                <li>
                  <strong>{{ $t("order.order_details.weight") }} </strong>
                  <span
                    class="ms-1"
                    v-for="(sh, index) in order.shipping"
                    :key="index"
                  >
                    {{ sh.shipping_weight }}
                  </span>
                </li>
                <li>
                  <strong
                    >{{ $t("order.order_details.shipping_fees") }}
                  </strong>
                  <div v-for="(sh, index) in order.shipping" :key="index">
                    {{ sh.shipping_cost }}
                  </div>
                </li>
                <li>
                  <strong>{{ $t("order.order_details.tracking_nbr") }}</strong>
                  <div v-for="(sh, index) in order.shipping" :key="index">
                    {{ sh.tracking_number || "-" }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mt-1">
        <div
          class="orderDetails--note"
          v-if="
            ['ps_checkpayment', 'ps_wirepayment'].indexOf(
              order.details.module
            ) != -1
          "
        >
          {{ $t("checkout.payment.note", { p: `${order.details.reference}` }) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { OrderPaymentResponseType } from "~~/src/types/PaymentResponseType";

defineProps({
  order: {
    type: Object as PropType<OrderPaymentResponseType>,
  },
});
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.orderDetails {
  &--details {
    background: #ffffff;
  }
  &--products {
    font-size: 12px;
    &-name {
      font-weight: bold;
    }
  }
}
</style>
