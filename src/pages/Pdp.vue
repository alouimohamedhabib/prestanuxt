<template>
  <div v-if="productDetails">
    <Swiper
      v-if="productDetails.images.length > 0"
      :modules="[
        SwiperAutoplay,
        SwiperEffectCreative,
        SwiperPagination,
        SwiperNavigation,
      ]"
      :pagination="true"
      :navigation="true"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="(slide, index) in productDetails.images" :key="index">
        <img :src="slide.src" :alt="productDetails.description_short" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script lang="ts" setup>
import { productdetailPath } from "../config/APIRoutes";
import { useProductStore } from "../store";
const route = useRoute();
const PDPStore = useProductStore();
const { id } = route.params;
PDPStore.init(productdetailPath, { product_id: id, image_type: "large" });
const productDetails = computed(() => PDPStore.getProductDetails);
</script>

<style lang="scss">
.swiper-pagination {
  &-bullet {
    transition: all 200ms ease-in-out;
    &-active {
      width: 20px;
      border-radius: 10px;
      background-color: grey;
    }
  }
}
.swiper {
  &-button-prev,
  &-button-next {
    &:after {
      font-size: 12px;
      color: grey;
    }
  }
}
</style>
