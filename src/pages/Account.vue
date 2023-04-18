<template>
  <div class="d-flex justify-content-center" v-if="isFetching">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <AuthenticationSignin v-if="!isFetching && !accountProfile" />
  <AccountProfile
    v-if="!isFetching && accountProfile && accountProfile.active"
  />
</template>
<script setup lang="ts">
import { useAccountStore } from "../store";
const accountStore = useAccountStore();
const accountProfile = computed(() => accountStore.getAccountInfo);
const isFetching = computed(() => accountStore.getFetching);

</script>
