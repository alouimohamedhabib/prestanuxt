<template>
  <div class="search mt-2 mb-4 row ms-2 me-2 position-relative">
    <input
      type="text"
      v-model="searchKeyword"
      class="search--input me-2 col-10 pt-2 pb-2"
      :placeholder="$t('input.search.placeholder')"
    />
    <AtomsSpinner />
    <button class="search--cta col-2" @click="redirectToSearchResult">
      <i class="bi bi-search"></i>
    </button>
    <div class="col-10 position-relative">
      <PlpSuggestions />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { productSearchPath } from "../config/APIRoutes";
import { useProductStore } from "../store";
import Debounce from "../helpers/debounce";
const searchKeyword: Ref<string> = ref("");
const config = useRuntimeConfig();
const productStore = useProductStore();
// watch searchKeyword
watch(
  () => searchKeyword.value,
  (newValue, oldValue) => {
    if (newValue.length < 3) {
      productStore.resetSuggestion();
      return;
    }
    search();
  }
);
const redirectToSearchResult = () => {
  productStore.resetSuggestion();
  if (searchKeyword.value.length >= 3)
    navigateTo(`/search/${searchKeyword.value}?order=product.position.asc`);
};
const search = Debounce(() => {
  const keyword = searchKeyword.value;
  // call the store
  productStore.search(productSearchPath, {
    s: keyword,
    resultsPerPage: config.public.RESULT_PER_PAGE,
  });
});
</script>
<style lang="scss" scoped>
.search {
  font-size: 13px;
  &--input {
    border-radius: 20px;
    background-color: #f3f4f5;
    border: 1px solid transparent;

    height: 40px;
    &:focus,
    &:focus-visible,
    &:active {
      border: 1px solid #aaaaaa;
      outline: none;
    }
  }
  &--cta {
    border: none;
    background: #000000;
    border-radius: 100%;
    color: #ffffff;
    height: 40px;
    width: 40px;
  }
}
</style>
