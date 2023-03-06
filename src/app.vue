<template>
  <NDropdown trigger="hover" :options="options">
    <n-button>Go For a Trip</n-button>
  </NDropdown>
  <hr />
  <NSpace>
    <NButton>Default</NButton>
    <NButton type="tertiary"> Tertiary </NButton>
    <NButton type="primary"> Primary </NButton>
    <NButton type="info"> Info </NButton>
    <NButton type="success"> Success </NButton>
    <NButton type="warning"> Warning </NButton>
    <NButton type="error"> Error </NButton>
  </NSpace>
</template>

<script setup lang="ts">
import { NButton, NSpace, NDropdown, useMessage } from "naive-ui";
import {
  useProductListStore,
  useCartStore,
  useProductStore,
  useUserInterfaceStore,
} from "./store";
const message = useMessage();
const product = useProductStore();
const cart = useCartStore();
const Ui = useUserInterfaceStore();
const options = [
  {
    label: "Marina Bay Sands",
    key: "marina bay sands",
    disabled: true,
  },
  {
    label: "Brown's Hotel, London",
    key: "brown's hotel, london",
  },
  {
    label: "Atlantis Bahamas, Nassau",
    key: "atlantis nahamas, nassau",
  },
  {
    label: "The Beverly Hills Hotel, Los Angeles",
    key: "the beverly hills hotel, los angeles",
  },
];
</script>
