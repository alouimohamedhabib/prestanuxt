<template>
  <pre>
    Errors {{ errors }}
    qty : {{ qty }}
    minimal_quantity {{ preAddToCartProductOptions?.minimal_quantity }}
    quantity {{ preAddToCartProductOptions?.quantity }}
  </pre>
  <button type="button" @click="addToCart" class="add-to-cart disabled">
    <i class="bi bi-bag"></i> {{ $t("product.add_to_cart") }}
  </button>
</template>

<script setup lang="ts">
import { useProductStore } from "~~/src/store";
const props = defineProps({
  qty: Number,
});
const errors: Ref<any> = ref();
const PDPStore = useProductStore();
const qtyProp = toRef(props, "qty") || 0;
const product = PDPStore.getProductDetails;
const preAddToCartProductOptions = computed(
  () => PDPStore.getPreAddToCartProductOptions
);
const addToCart = () => {
  // check if the quantity si OK
  if (preAddToCartProductOptions) {
    if (
      qtyProp.value &&
      preAddToCartProductOptions.value &&
      (qtyProp.value > preAddToCartProductOptions?.value?.quantity ||
        qtyProp.value < preAddToCartProductOptions.value?.minimal_quantity)
    ) {
      errors.value = [
        "QUANTITY_ATTRIBUTE_ERROR",
        {
          qty: qtyProp.value,
          preAddToCartProductOptions: preAddToCartProductOptions.value,
        },
      ];
    } else errors.value = null;
  } else if (
    qtyProp.value &&
    (qtyProp.value > product.quantity ||
      qtyProp.value < parseInt(product.minimal_quantity))
  ) {
    errors.value.push("QUANTITY_ERROR", {
      qty: qtyProp.value,
      max_quantity: product.quantity,
      min_quantity: parseInt(product.minimal_quantity),
    });
  }
  // call to the API 
};
</script>
<style lang="scss" scoped>
.add-to-cart {
  background-color: #000000;
  color: #ffffff;
  border-radius: 30px;
  padding: 15px 20px;
  border: none;
}
</style>
