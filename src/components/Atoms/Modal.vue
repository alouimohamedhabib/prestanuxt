<template>
  {{ modalObject.show }}
  <div class="modalPs" v-if="modalObject.show">
    <div class="modalPs--wrapper">
      <div class="modalPs--wrapper__icon">
        <i
          class="bi bi-check-circle-fill ok"
          v-if="modalObject.type === 'ok'"
        ></i>
        <i
          class="bi bi-exclamation-circle-fill ko"
          v-if="modalObject.type === 'ko'"
        ></i>
      </div>
      <div class="modalPs--wrapper__title">{{ $t(modalObject.title) }}</div>
      <div class="modalPs--wrapper__content mb-4">
        {{ $t(modalObject.content, { p: product.name }) }}
      </div>
      <div class="modalPs--wrapper__cb">
        <template v-for="(g, index) in modalObject.cb" :key="index">
          <button @click="g.cb">{{ $t(g.label) }}</button>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProductStore, useUserInterfaceStore } from "~~/src/store";

const PDPStore = useProductStore();
const product = PDPStore.getProductDetails;
const uiStore = useUserInterfaceStore();
const modalObject = computed(() => uiStore.getPsModalState);
</script>
<style lang="scss" scoped>
.modalPs {
  text-align: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 20;
  color: white;
  align-items: center;
  margin: auto;
  &--wrapper {
    background: white;
    height: fit-content;
    width: 80vw;
    margin: auto;
    color: black;
    border-radius: 10px;
    padding: 1em;
    &__icon {
      font-size: 3em;
      display: flex;
      justify-content: center;
      .ok {
        color: green;
      }
      .ko {
        color: #c44747;
      }
    }
    &__title {
      font-weight: bold;
      font-size: 2em;
      margin: 20px 0;
    }
    &__content {
      max-height: 40vh;
      overflow: scroll;
    }
    &__cb {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      button {
        background-color: #000000;
        color: #ffffff;
        border-radius: 30px;
        padding: 15px 20px;
        border: none;
        margin: 10px 5px;
        flex: 1 1 50%;
      }
    }
  }
}
</style>
