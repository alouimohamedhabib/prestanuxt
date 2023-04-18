<template>
  <AuthenticationSignin v-if="!accountProfile" />
  <AccountProfile v-if="accountProfile && accountProfile.active" />
</template>
<script setup lang="ts">
import { useAccountStore } from "../store";
const accountStore = useAccountStore();
const accountProfile = computed(() => accountStore.getAccountInfo);
</script>
