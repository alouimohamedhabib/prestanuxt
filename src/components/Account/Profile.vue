<template>
  <div class="container profile">
    <div class="row">
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
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAccountStore } from "~~/src/store";
const userStore = useAccountStore();
const userInfo = userStore.getAccountInfo;
</script>
<style lang="scss" scoped>
.profile {
  &--label {
    color: grey;
  }
  &--info {
    border-bottom: 1px solid lightgrey;
    padding: 1em 0;
  }
}
</style>
