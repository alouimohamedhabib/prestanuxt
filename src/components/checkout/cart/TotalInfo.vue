<template>
  <div class="rounded total ps-2 pe-2 pb-4 pt-4 mt-4">
    <table class="table total__table">
      <tbody>
        <tr>
          <td class="total__table--label">{{ $t("checkout.cart.total") }}</td>
          <td class="total__table--value">{{ total }}</td>
        </tr>
        <tr>
          <td class="total__table--label">
            {{ $t("checkout.cart.shipping") }}
          </td>
          <td class="total__table--value">{{ shippingTotal }}</td>
        </tr>
        <tr>
          <td class="total__table--label">
            {{ $t("checkout.cart.bagTotal") }}
          </td>
          <td class="total__table--value">{{ bagTotal }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  total: { type: String },
  shippingTotal: { type: String },
  bagTotal: { type: String },
});
</script>
<style lang="scss" scoped>
.total {
  border: 1px solid lightgrey;
  &__table {
    tr:last-child {
      td {
        border: none;
      }
    }
    &--label {
      font-weight: bold;
    }
    &--value {
      font-weight: bold;
      text-align: right;
    }
  }
}
</style>
