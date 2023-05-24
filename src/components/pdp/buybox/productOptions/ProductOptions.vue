<template>
  <div class="product-options">
    <div class="row">
      <div class="col-10" v-if="sizes && sizes[0]?.items">
        <div class="product-options--size">
          <h3>{{ $t("size") }}</h3>
          <div
            class="product-options--size__list mt-4"
            :class="{
              dimension: sizes[0].title?.toLocaleLowerCase() === 'dimension',
            }"
          >
            <template v-for="(size, index) in sizes[0]?.items" :key="index">
              <button
                @click="handleSizeSelection(size.id)"
                class="product-options--size__list__button me-3"
                :class="{ active: currentSizeSelection === size.id }"
              >
                {{ size.value }}
              </button>
            </template>
          </div>
        </div>
      </div>
      <div class="col-2" v-if="colors && colors[0]?.items">
        <div class="product-options--colors">
          <div class="product-options--colors__list">
            <template v-for="(color, index) in colors[0]?.items" :key="index">
              <button
                @click="handleColorSelection(color.id)"
                class="product-options--colors__list__button"
                :class="{ active: currentColorSelection === color.id }"
                :style="{
                  'background-color': color.hex_value,
                }"
              ></button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
import { useProductStore } from "~~/src/store";
import { Option } from "~~/src/types/ProductType";
const PDPStore = useProductStore();
const currentSizeSelection: Ref<number> = ref(NaN);
const currentColorSelection: Ref<number> = ref(NaN);
const options = computed(() => PDPStore.getProductOptions);
const colors: ComputedRef<Option[] | undefined> = computed(() => {
  const colorsArray = options.value.filter((item) => item.is_color_option == 1);
  // define pre-selected size
  currentColorSelection.value = colorsArray[0]?.items[0]?.id || NaN;
  return colorsArray;
});
const sizes: ComputedRef<Option[] | undefined> = computed(() => {
  const sizesArray = options.value.filter((item) => item.is_color_option != 1);
  // define pre-selected size
  currentSizeSelection.value = sizesArray[0]?.items[0]?.id || NaN;
  return sizesArray;
});

/**
 * Handle changes on size
 * @param sizeId
 */
const handleSizeSelection = (sizeId: number) => {
  currentSizeSelection.value = sizeId;
};
/**
 * Handle changes on color
 * @param colorId
 */
const handleColorSelection = (colorId: number) => {
  currentColorSelection.value = colorId;
};
watch(
  () => [currentSizeSelection.value, currentColorSelection.value],
  (newValue, oldValue) => {
    const id_product_attribute = newValue.toString().replace(",", "_");
    // update the store
    PDPStore.setPreAddToCartProductOptions(id_product_attribute);
  }
);
// define default selection on page load
</script>

<style lang="scss" scoped>
.product-options {
  &--size {
    h3 {
      font-size: 16px;
      font-weight: bold;
    }
    &__list {
      &.dimension {
        button {
          font-size: 10px;
          height: 60px;
          width: 60px;
        }
      }
      &__button {
        text-align: center;
        display: inline-block;
        border-radius: 100%;
        height: 40px;
        width: 40px;
        border: 1px solid #dddddd;
        color: #888888;
        background: transparent;

        &.active {
          background: #000000;
          color: #ffffff;
        }
      }
    }
  }
  &--colors {
    &__list {
      display: flex;
      border: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 1px 12px 5px #eaeaea;
      padding: 1em 0.5em;
      border-radius: 20px;
      margin-top: 1em;
      &__button {
        display: inline-block;
        border-radius: 100%;
        height: 20px;
        width: 20px;
        border: 1px solid #dddddd;
        margin-bottom: 0.5em;
        position: relative;
        &.active {
          &:after {
            content: "\F26E";
            content: "\f26e";
            height: 10px;
            width: 10px;
            display: block;
            position: absolute;
            top: -10px;
            font-family: bootstrap-icons;
            font-size: 1em;
          }
        }
      }
    }
  }
}
</style>
