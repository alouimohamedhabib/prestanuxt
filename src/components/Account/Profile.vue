<template>
  <div class="container profile">
    <div class="row">
      <div class="col-12">
        <div class="profile--short rounded p-3 mt-4">
          <h2>
            {{ userInfo.firstname.toUpperCase() }} {{ userInfo.lastname }}
          </h2>
          <h3>
            {{ userInfo.email }}
          </h3>
        </div>
      </div>
      <div class="col-12">
        <div class="profile--links mt-4 rounded pt-2 pb-2">
          <ul class="p-0 m-0">
            <li>
              <NuxtLink to="/account/info" class="p-2 d-block">
                <i class="bi bi-person-circle ms-2 rounded"></i>
                {{ $t("profile.links.details") }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/account/orders" class="p-2 d-block">
                <i class="bi bi-bag-check-fill ms-2 rounded"></i>
                {{ $t("profile.links.my_orders") }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/" class="p-2 d-block">
                <i class="bi bi-gear ms-2 rounded"> </i>
                {{ $t("profile.links.settings") }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12">
        <button @click="logout" class="dark-button w-100 rounded-2 mt-5">
          {{ $t("profile.logout") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAccountStore } from "~~/src/store";
const userStore = useAccountStore();
const userInfo = userStore.getAccountInfo;
const logout = () => userStore.logout();
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
  &--short {
    box-shadow: 0px 5px 6px 2px rgb(128 128 128 / 24%);
    h2 {
      font-size: 14px;
    }
    h3 {
      font-size: 12px;
      color: lightgrey;
    }
  }
  &--links {
    border: 1px solid #e8e6e6;
    ul {
      list-style: none;
      li {
        a {
          color: #000000;
          text-decoration: none;
          i {
            background: #f4f1f1;
            padding: 0.5em 1em;
            font-size: 12px;
            display: inline;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
