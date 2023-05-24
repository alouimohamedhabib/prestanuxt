<template>
  <div class="number">
    <span class="minus" @click="() => controlQuantity(['-'])">-</span>
    <input
      type="number"
      v-model="quantityControl"
      @keyup="handleKeyUp"
      @keypress="handleKeyDown"
    />
    <span class="plus" @click="() => controlQuantity(['+'])">+</span>
  </div>
  <div class="stock-status" v-if="!cart_Quantity">
    {{
      available_for_order === "1"
        ? $t("product.available_in_stock")
        : $t("product.not_available_in_stock")
    }}
  </div>
</template>
<script lang="ts" setup>
import Debounce from "~~/src/helpers/debounce";
import { ProductCart } from "~~/src/types/CartType";
const emit = defineEmits<{
  (
    e: "quantityUpdate",
    qty: number,
    productCart: ProductCart | undefined, // ✨
    product_id?: string,
    action?: string
  ): void;
}>();
const props = defineProps({
  cart_Quantity: {
    // ✨ if cart_Quantity is set used it as default qty for the input
    required: false,
    type: Number,
  },
  product_id: {
    // ✨
    required: false,
    type: String,
  },
  productCart: {
    // ✨
    required: false,
    type: null as unknown as PropType<ProductCart | undefined>,
  },
  quantity: Number,
  minimal_quantity: String,
  allow_out_of_stock: String,
  available_for_order: String,
  disableWatchKeyUp: {
    // ✨
    type: Boolean,
    default: false,
    required: false,
  },
});

const {
  quantity,
  minimal_quantity,
  allow_out_of_stock,
  available_for_order,
  cart_Quantity,
  product_id,
  productCart,
  disableWatchKeyUp,
} = toRefs(props);

let quantityControl: Ref<number> = ref(
  cart_Quantity?.value ?? parseInt(minimal_quantity?.value || "0") // ✨
);
let tmpquantityControl: any;
// ✨ the idea is to persist the previous qty value
let handleKeyDown = (qty: KeyboardEvent) => {
  tmpquantityControl = quantityControl.value;
};

// ✨ instead of watch to avoid emitting event twice when we click on arrow
const handleKeyUp = (qty: KeyboardEvent) => {
  // tell if we want to let the system watch the changes on keyup or not
  if (disableWatchKeyUp.value) {
    quantityControl.value = tmpquantityControl;
    return false;
  }
  let action = "-";
  let newQty = parseInt((qty?.target as HTMLInputElement).value);
  action = newQty > quantityControl.value ? "+" : "-";

  if (newQty > (quantity as Ref<number>).value) {
    quantityControl.value = (quantity as Ref<number>).value;
  }
  emit(
    "quantityUpdate",
    quantityControl.value,
    productCart?.value,
    product_id?.value,
    action
  );
};
/**
 * Controll the quantity input field
 * @param action string
 */
// ✨ add debounce
const controlQuantity = Debounce((action: string) => {
  if (action === "+") {
    if ((quantity as Ref<number>)?.value >= quantityControl.value + 1)
      quantityControl.value++;
    else quantityControl.value = quantity?.value || 0;
  } else {
    if (parseInt(minimal_quantity?.value || "0") <= quantityControl.value - 1)
      quantityControl.value--;
  }
  emit(
    "quantityUpdate",
    quantityControl.value,
    productCart?.value,
    product_id?.value,
    action
  );
});
</script>
<style lang="css" scoped>
span {
  cursor: pointer;
}
.number {
  background: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  float: right;
  border-radius: 20px;
  margin-bottom: 10px;
}
.minus,
.plus {
  width: 20px;
  height: 20px;
  background: transparent;
  border-radius: 4px;
  border: none;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
input {
  background: transparent;
  border: none;
  height: 34px;
  width: 40px;
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  outline: none;
}
.stock-status {
  font-size: 12px;
  font-weight: bold;
}
</style>
