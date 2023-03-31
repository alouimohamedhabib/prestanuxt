<template>
  <Swiper
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
    <SwiperSlide v-for="(slide, index) in productImages" :key="index">
      <img :src="slide.src" :alt="description_short" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Image } from "~~/src/types/ProductType";
defineProps({
  productImages: Array as PropType<Image[]>,
  description_short: String,
});
</script>
