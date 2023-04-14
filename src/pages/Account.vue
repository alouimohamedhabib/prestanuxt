<template>
  <div class="container authentication">
    <div class="row">
      <div class="col-12 logo mb-2 text-center mt-5 mb-5">
        <img :src="essantialData?.logo_url" alt="" />
      </div>
      <div class="col-12 welcome mt-4 authentication--header mb-5">
        <h2 class="fw-bold">
          {{ $t("welcome") }}
        </h2>
        <p class="fz-13">
          {{ $t("form.sign-message") }}
        </p>
      </div>
      <div class="col-12 authentication--forms">
        <AuthenticationSignin />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { usePageStore } from "~~/src/store";

const pageStore = usePageStore();
const essantialData = computed(() => pageStore.getPageEssentials);
</script>
<style lang="scss" scoped>
.authentication {
  &--header {
    p {
      font-weight: normal;
      font-size: 14px;
      opacity: 0.7;
    }
  }
}
</style>
