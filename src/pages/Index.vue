<template>index</template>

<script setup lang="ts">
import { usePageStore } from "../store";
import PagesNamesEnum from "../types/pages";

const pageStore = usePageStore();

pageStore.init(PagesNamesEnum.hp);
</script>
