<template>
  <div id="header">
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
  i {
    cursor: pointer;
  }
}
</style>
