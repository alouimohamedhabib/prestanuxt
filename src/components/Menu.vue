<template>
  <div
    class="menu"
    :class="{
      show: showMenu,
      hide: !showMenu,
    }"
  >
    <div class="closer">
      <i @click="handleMenuTrigger" class="bi bi-x-circle"></i>
    </div>

    <ul>
      <li>
        <a>Link</a>
      </li>
      <li>
        <a>Link</a>
      </li>
      <li>
        <a>Link</a>
      </li>
      <li>
        <a>Link</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useUserInterfaceStore } from "@/store";
const userInterface = useUserInterfaceStore();
const showMenu = computed(() => userInterface.getMenuState);
const handleMenuTrigger = () => {
  userInterface.toggleMenuState();
};
</script>
<style lang="scss" scoped>
.menu {
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  .closer {
    display: flex;
    align-items: right;
    justify-content: right;
    padding: 1em;
    i {
      position: relative;
    }
  }
  // hide and show
  &.show {
    left: 0;
  }
  &.hide {
    left: -100%;
  }
  ul {
    list-style: none;
    padding: 2em;
    margin: 0;
    text-align: left;
    li {
      display: block;
      a {
        display: block;
        padding: 0.2em;
        margin: 0.2em;
        font-size: 1em;
      }
    }
  }
}
</style>
