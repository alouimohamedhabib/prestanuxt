<template>
  <div>
    <form class="auth_form">
      <div class="row">
        <div class="col-12">
          <template v-for="(error, index) in errors" :key="index">
            <div class="alert alert-danger" role="alert">
              {{ error }}
            </div>
          </template>
        </div>
        <div class="col-12">
          <label for="inputLogin">{{ $t("form.email") }}</label>
          <input
            id="inputLogin"
            class="auth_form--input w-100 d-block mb-4"
            type="text"
            v-model="login"
          />
          <label for="inputPassword">{{ $t("form.password") }}</label>
          <input
            id="inputPassword"
            class="auth_form--input w-100 d-block mb-4"
            type="password"
            v-model="password"
          />
          <div>
            <button
              @click="handleFormInput($event)"
              class="dark-button w-100 mt-4 auth_form--button"
            >
              {{ $t("form.login") }}
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { notEmptyString, validateEmail } from "~~/src/helpers/formValidate";
import { useAccountStore } from "~~/src/store";
const accountStore = useAccountStore();
const { t } = useI18n();
const errors: Ref<string[]> = ref([]);
const login = ref("sam@binshops.com");
const password = ref("123456789");
const handleFormInput = (event: MouseEvent) => {
  errors.value = [];
  event.preventDefault();
  // check email
  if (!validateEmail(login.value || "")) {
    errors.value = [...errors.value, t("form.errors.email")];
  }
  // check password
  if (!notEmptyString(password.value || "")) {
    errors.value = [...errors.value, t("form.errors.password_length")];
  }
  if (!errors.value.length) {
    accountStore.auth({
      email: login.value,
      password: password.value,
    });
  }
};
</script>

<style lang="scss" scoped>
.auth_form {
  *:focus,
  * {
    outline: none;
  }
  label {
    font-weight: bold;
  }
  &--input {
    border-width: 0 0 1px 0;
  }
  &--button {
  }
}
</style>
