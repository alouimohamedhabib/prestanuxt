<template>
  <div class="container authentication">
    <div class="row">
      <div class="col-12 logo mb-2 text-center mt-5 mb-5">
        <img :src="essantialData?.logo_url" alt="" />
      </div>
      <div class="col-12 welcome mt-4 authentication--header mb-5">
        <h2 class="fw-bold">
          {{ $t("signup") }}
        </h2>
        <p class="fz-13">
          {{ $t("form.signup-message") }}
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
                  v-if="signupErrors && signupErrors.code === 306"
                >
                  {{ $t("form.errors.wrong_credentials") }}
                </div>
                <template v-for="(error, index) in errors" :key="index">
                  <span class="d-block alert alert-warning">
                    {{ error }}
                  </span>
                </template>
              </div>
              <div class="col-12">
                <label for="firstName">{{ $t("form.firstname") }}</label>
                <input
                  id="firstName"
                  class="auth_form--input w-100 d-block mb-4"
                  type="text"
                  v-model="firstName"
                />
                <label for="lastName">{{ $t("form.lastname") }}</label>
                <input
                  id="lastName"
                  class="auth_form--input w-100 d-block mb-4"
                  type="text"
                  v-model="lastName"
                />

                <label for="email">{{ $t("form.email") }}</label>
                <input
                  id="email"
                  class="auth_form--input w-100 d-block mb-4"
                  type="text"
                  v-model="email"
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
                    {{ $t("form.register") }}
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
const signupErrors = computed(() => accountStore.getErrors);
const firstName = ref();
const lastName = ref();
const email = ref();
const password = ref();
const handleFormInput = (event: MouseEvent) => {
  errors.value = [];
  event.preventDefault();
  // check firstname
  if (!notEmptyString(firstName.value || "")) {
    errors.value = [...errors.value, t("form.errors.firstname_required")];
  }
  // check lastname
  if (!notEmptyString(lastName.value || "")) {
    errors.value = [...errors.value, t("form.errors.lastname_required")];
  }
  // check email
  if (!validateEmail(email.value || "")) {
    errors.value = [...errors.value, t("form.errors.email")];
  }
  // check password
  if (!notEmptyString(password.value || "")) {
    errors.value = [...errors.value, t("form.errors.password_length")];
  }
  if (!errors.value.length) {
    accountStore.register({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
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
