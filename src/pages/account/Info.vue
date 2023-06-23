<template>
  <div class="container profile" v-if="userInfo">
    <div class="row">
      <div class="col-12">
        <h1 class="pt-2 pb-2 mt-4">{{ $t("profile.title") }}</h1>
      </div>
      <div class="col-4">
        <div class="profile--label">
          {{ $t("profile.name") }}
        </div>
      </div>
      <div class="col-8">
        <div class="profile--info">
          {{ userInfo.lastname }} {{ userInfo.firstname }}
        </div>
      </div>
      <div class="col-4">
        <div class="profile--label">
          {{ $t("profile.gender.label") }}
        </div>
      </div>
      <div class="col-8">
        <div class="profile--info">
          {{
            userInfo.id_gender === "1"
              ? $t("profile.gender.male")
              : $t("profile.gender.female")
          }}
        </div>
      </div>
      <div class="col-4">
        <div class="profile--label">
          {{ $t("profile.email") }}
        </div>
      </div>
      <div class="col-8">
        <div class="profile--info">
          {{ userInfo.email }}
        </div>
      </div>
      <div class="col-4">
        <div class="profile--label">
          {{ $t("profile.age") }}
        </div>
      </div>
      <div class="col-8">
        <div class="profile--info">
          {{ calculateAge(userInfo.birthday) }}
        </div>
      </div>
      <div class="col-12">
        <NuxtLink
          :to="'/account/edit'"
          class="dark-button d-block mt-3 w-100 text-center"
        >
          {{ $t("account.edit") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAccountStore } from "~~/src/store";
import calculateAge from "../../helpers/AgeCalculator";
const userStore = useAccountStore();
const userInfo = computed(() => userStore.getAccountInfo);
const refreshAccount = computed(() => userStore.getrefreshAccount);
const logout = () => userStore.logout();
onNuxtReady(() => {
  if (refreshAccount) userStore.fetch();
});
</script>
<style lang="scss" scoped>
.profile {
  &--label {
    padding: 1em 0;
    color: grey;
  }
  &--info {
    border-bottom: 1px solid lightgrey;
    padding: 1em 0;
  }
}
</style>
