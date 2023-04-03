<template>
  <div class="product-options">
    <div class="row">
      <div class="col-10" v-if="sizes?.items">
        <div class="product-options--size">
          <h3>{{ $t("size") }}</h3>
          <div class="product-options--size__list mt-4">
            <template v-for="(size, index) in sizes?.items" :key="index">
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
      <div class="col-2" v-if="colors?.items">
        <div class="product-options--colors">
          <div class="product-options--colors__list">
            <template v-for="(color, index) in colors?.items" :key="index">
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
import { Option } from "~~/src/types/ProductType";
const currentSizeSelection: Ref<number> = ref(NaN);
const currentColorSelection: Ref<number> = ref(NaN);
const props = defineProps({
  options: [] as PropType<Option[]>,
});
const colors: Ref<Option | undefined> = ref();
const sizes: Ref<Option | undefined> = ref();
props.options?.forEach((item: Option) => {
  if (item.is_color_option === 1) colors.value = item;
  else sizes.value = item;
});

const handleSizeSelection = (sizeId: number) => {
  currentSizeSelection.value = sizeId;
};
const handleColorSelection = (sizeId: number) => {
  currentColorSelection.value = sizeId;
};
</script>

<style lang="scss" scoped>
.product-options {
  &--size {
    h3 {
      font-size: 16px;
      font-weight: bold;
    }
    &__list {
      &__button {
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
