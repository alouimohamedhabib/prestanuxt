<template>index</template>

<script setup lang="ts">
import { usePageStore } from "../store";
import PagesNamesEnum from "../types/pagesType";

const pageStore = usePageStore();

pageStore.init(PagesNamesEnum.hp);
</script>
