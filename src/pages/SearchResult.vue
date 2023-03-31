<template>
  <div class="container search-result">
    <div class="row">
      <div class="col-12"><Search /></div>
      <div class="col-12" v-if="searchProductsList?.products?.length">
        <div class="row">
          <div class="col-12">
            <h1>
              {{ $t("product.result_for") }} <u>{{ params?.s }}</u>
            </h1>
          </div>
          <div class="col-8 offset-4 mt-2 mb-2">
            <ProductsSort />
          </div>
          <div
            class="col-6"
            v-for="(product, index) in searchProductsList.products"
            :key="index"
          >
            <PlpMiniature :product="product" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="search-result--no-results col-12 text-center"
        v-if="searchProductsList?.products?.length === 0"
      >
        <div>
          <i class="bi bi-cone-striped"></i>
        </div>
        <p>
          {{ $t("product.no_result") }} <b>"{{ params.s }}"</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { productSearchPath } from "../config/APIRoutes";
import { useProductListStore } from "../store";

const PLPStore = useProductListStore();
const route = useRoute();
const { params, query } = route;
PLPStore.init(productSearchPath, {
  s: params.s,
  order: query.order || "product.position.asc",
});
const searchProductsList = computed(() => PLPStore.getsearchProductsList);
</script>

<style lang="scss" scoped>
.search-result {
  &--no-results {
    i {
      font-size: 3em;
    }
  }
}
</style>
