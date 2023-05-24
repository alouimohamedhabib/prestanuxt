<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "checkout", // ✨ new layout
});
</script>
