<template>
  <div class="spinner-border" role="status" v-if="showSpinner">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script lang="ts" setup>
import { useUserInterfaceStore } from "~~/src/store";

// get spinner state
const UIStore = useUserInterfaceStore();
const showSpinner = computed(() => UIStore.getSuggestionSpinner);
</script>

<style lang="scss" scoped>
.spinner-border {
  position: absolute;
  top: 10px;
  right: 80px;
  opacity: 0.6;
  height: 20px;
  width: 20px;
  padding: 0;
}
</style>
