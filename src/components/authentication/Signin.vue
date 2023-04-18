<template>
  <div class="container authentication">
    <div class="row">
      <div class="col-12 logo mb-2 text-center mt-5 mb-5">
        <img :src="essantialData?.logo_url" alt="" />
      </div>
      <div class="col-12">
        <div v-if="signOutOk">
          <div
            class="alert alert-success fs-6 alert-dismissible fade show"
            role="alert"
          >
            {{ $t("profile.disconnected_ok") }}
            <button
              @click="dismiss"
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
      <div class="col-12 welcome mt-4 authentication--header mb-5">
        <h2 class="fw-bold">
          {{ $t("welcome") }}
        </h2>
        <p class="fz-13">
          {{ $t("form.sign-message") }}
        </p>
      </div>
      <div class="col-12 authentication--forms">
        <div>
          <form class="auth_form">
            <div class="row">
              <div class="col-12">
                <div
                  class="alert alert-danger"
                  role="alert"
                  v-if="signinErrors && signinErrors.code === 306"
                >
                  {{ $t("form.errors.wrong_credentials") }}
                </div>
                <template v-for="(error, index) in errors" :key="index">
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
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { notEmptyString, validateEmail } from "~~/src/helpers/formValidate";
import { useAccountStore, usePageStore } from "~~/src/store";
const accountStore = useAccountStore();
const pageStore = usePageStore();
const essantialData = computed(() => pageStore.getPageEssentials);
const { t } = useI18n();
const errors: Ref<string[]> = ref([]);
const signinErrors = computed(() => accountStore.getErrors);
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
const signOutOk = computed(() => accountStore.getsignOutOk);
const dismiss = () => accountStore.dismissSignOutOk();
</script>

<style lang="scss" scoped>
.authentication {
  &--header {
    p {
      font-weight: normal;
      font-size: 14px;
      opacity: 0.7;
    }
  }
}
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
