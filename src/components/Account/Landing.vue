<template>
  <div class="d-flex justify-content-center" v-if="isFetching">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <template v-if="!isFetching">
    <AuthenticationSignin v-if="!accountProfile && !ShowSigninForm" />
    <AuthenticationRegister v-if="!accountProfile && ShowSigninForm" />
    <AccountProfile v-if="accountProfile && accountProfile.active" />
    <div
      v-if="!accountProfile"
      class="auth-action d-block text-center mt-2 p-3"
      @click="alterShowSigninForm"
    >
      {{ ShowSigninForm ? $t("signin") : $t("signup") }}
    </div>
  </template>
</template>

<script setup lang="ts">
import { useAccountStore } from "~~/src/store";
const accountStore = useAccountStore();
const accountProfile = computed(() => accountStore.getAccountInfo);
const isFetching = computed(() => accountStore.getFetching);
const ShowSigninForm = computed(() => accountStore.getshowSigninForm);
const alterShowSigninForm = () => accountStore.defineShowSigninForm();
</script>
