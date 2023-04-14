<template>
  <div>
    <form class="auth_form">
      <div class="row">
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
            <button class="dark-button w-100 mt-4 auth_form--button">
              {{ $t("form.login") }}
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
const login = ref();
const password = ref();
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
