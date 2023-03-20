<template>
  <div id="header" class="position-relative">
    <i @click="handleMenuTrigger" class="bi bi-list"></i>
    <Menu />
  </div>
</template>

<script setup lang="ts">
import { useUserInterfaceStore } from "@/store";
const userInterface = useUserInterfaceStore();
const handleMenuTrigger = () => {
  userInterface.toggleMenuState();
};
</script>
<style lang="scss" scoped>
#header {
  z-index: 10;
  i {
    cursor: pointer;
  }
}
</style>
