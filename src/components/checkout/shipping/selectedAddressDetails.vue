<template>
  <div class="shadowed rounded p-4 mt-3" v-if="addressInfo">
    <p>
      <b
        >{{ $t("checkout.shipping.street") }}:
        <span class="fw-light">{{ addressInfo?.address1 }}</span></b
      >
    </p>
    <p>
      <b
        >{{ $t("checkout.shipping.city") }}:
        <span class="fw-light">{{ addressInfo?.city }}</span></b
      >
    </p>
    <p>
      <b
        >{{ $t("checkout.shipping.state") }}:
        <span class="fw-light">{{ addressInfo?.state }}</span></b
      >
    </p>
    <p>
      <b
        >{{ $t("checkout.shipping.phone") }}:
        <span class="fw-light">{{ addressInfo?.phone }}</span></b
      >
    </p>
    <p>
      <b
        >{{ $t("checkout.shipping.zip") }}:
        <span class="fw-light">{{ addressInfo?.postcode }}</span></b
      >
    </p>
    <p>
      <b
        >{{ $t("checkout.shipping.country") }}:
        <span class="fw-light">{{ addressInfo?.country }}</span></b
      >
    </p>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import { AddressType } from "~~/src/types/AddressType";

defineProps({
  addressInfo: null as unknown as PropType<AddressType>,
});
</script>
