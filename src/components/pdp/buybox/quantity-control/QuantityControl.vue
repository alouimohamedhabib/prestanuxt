<template>
  <div class="number">
    <span class="minus" @click="controlQuantity('-')">-</span>
    <input type="number" v-model="quantityControl" />
    <span class="plus" @click="controlQuantity('+')">+</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  quantity: Number,
  minimal_quantity: String,
  allow_out_of_stock: String,
  available_for_order: String,
});

const { quantity, minimal_quantity, allow_out_of_stock, available_for_order } =
  toRefs(props);
let quantityControl: Ref<number> = ref(
  parseInt(minimal_quantity?.value || "0")
);
/**
 * Controll the quantity input field
 * @param action string
 */
const controlQuantity = (action: string) => {
  if (action === "+") {
    if ((quantity as Ref<number>)?.value >= quantityControl.value + 1)
      quantityControl.value++;
  } else {
    if (parseInt(minimal_quantity?.value || "0") <= quantityControl.value - 1)
      quantityControl.value--;
  }
};
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
</style>
