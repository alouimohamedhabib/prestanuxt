<template>
  <h1>
    {{ $t("checkout.shipping.select-addr-label") }}
  </h1>
  <select
    class="form-select"
    aria-label="Default select example"
    v-if="addresses"
    @change="handleAddChanges"
  >
    <option value="">Open this select menu</option>
    <template v-for="(address, index) in addresses" :index:="index">
      <option :value="address?.id">{{ address?.alias }}</option>
    </template>
  </select>
</template>

<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import { AddressType, AddressTypeObject } from "~~/src/types/AddressType";
defineProps({
  addresses: {} as PropType<(AddressType | undefined)[]>,
});
const emit = defineEmits<{
  (e: "addrChanges", id: number): void;
}>();
const handleAddChanges = (event: Event) => {
  emit("addrChanges", parseInt((event.target as HTMLSelectElement).value));
};
</script>
