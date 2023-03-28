<template>
  <ul class="list-group suggestions">
    <div
      class="list-group-item"
      v-if="getProductSearchSuggestion?.products.length === 0"
    >
      <i class="bi bi-cone-striped"></i> {{ $t("product.no_result") }}
    </div>
    <NuxtLink
      :to="'/pdp'"
      v-for="(product, index) in getProductSearchSuggestion?.products"
      :key="index"
      class="list-group-item"
    >
      <div class="row me-0 ms-0">
        <div class="col-3">
          <img
            class="suggestions__productSuggestion--thumbnail"
            :src="product.default_image.url"
            width="50"
            :alt="product.description_short"
          />
        </div>
        <div class="col-9">
          <div class="row">
            <div class="col-12">
              <h3 class="suggestions__productSuggestion--name">
                {{ product.name }}
              </h3>
            </div>
            <div class="col-12">
              <p class="suggestions__productSuggestion--price">
                {{ product.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </ul>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "~~/src/store";
// get the suggestions from the store
const productStore = useProductStore();
const router = useRouter();
router.beforeEach(() => {
  productStore.resetSuggestion();
});

// destruct
const { getProductSearchSuggestion } = storeToRefs(productStore);
</script>

<style lang="scss" scoped>
.suggestions {
  position: absolute;
  top: 0px;
  left: 0;
  z-index: 12;
  box-shadow: 5px 5px 14px rgba(0, 0, 0, 0.2);
  padding: 0;
  &__productSuggestion {
    &--name {
      font-size: 1em;
      font-weight: bold;
      line-height: normal;
      margin-bottom: 0;
    }
    &--thumbnail {
      border-radius: 5px;
    }
    &--price {
      line-height: normal;
      margin-bottom: 0;
    }
  }
}
</style>
