<template>
  <select
    class="form-select"
    aria-label="Default select example"
    v-model="selectedSortFilter"
  >
    <template v-for="(sort, index) in sortingFilters" :key="index">
      <option :value="sort.urlParameter">
        {{ sort.label }}
      </option>
    </template>
  </select>
</template>

<script setup lang="ts">
import { productSearchPath } from "~~/src/config/APIRoutes";
import { useProductListStore } from "~~/src/store";
const route = useRoute();
const router = useRouter();
const { params, query } = route;
const productListStore = useProductListStore();
const sortingFilters = productListStore.getsearchProductsList.sort_orders;
const selectedSortFilter = ref(query.order || "product.position.asc");
// call the search api
watch(
  () => selectedSortFilter.value,
  () => {
    router.replace({ query: { order: selectedSortFilter.value } });
    productListStore.init(productSearchPath, {
      s: params.s,
      order: selectedSortFilter.value,
    });
  }
);
</script>
