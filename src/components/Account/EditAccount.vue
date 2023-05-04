<template>
  <div class="container authentication">
    <div class="row">
      <div class="col-12 welcome mt-4 authentication--header mb-5">
        <h2 class="fw-bold">
          {{ $t("account.edit") }}
        </h2>
        <p class="fz-13">
          {{ $t("account.edit-message") }}
        </p>
      </div>
      <div class="col-12">
        <div
          class="alert alert-success"
          v-if="editAccountStatus && editAccountStatus === 'ok'"
        >
          SUCCESS
        </div>
      </div>
      <div class="col-12 authentication--forms">
        <div>
          <form class="auth_form">
            <div class="row">
              <div class="col-12">
                <div
                  class="alert alert-success"
                  v-if="updateProfileStatus === 'ok'"
                >
                  {{ $t("form.accountupdateOK") }}
                </div>
                <div
                  class="alert alert-error"
                  v-if="updateProfileStatus === 'ko'"
                >
                  {{ $t("form.accountupdateko") }}
                </div>
              </div>
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
                <label for="inputBirth">{{ $t("form.birth") }}</label>
                <input
                  id="inputBirth"
                  class="auth_form--input w-100 d-block mb-4"
                  type="date"
                  v-model="birthday"
                />
                <div>
                  <button
                    @click="handleFormSubmission($event)"
                    class="dark-button w-100 mt-4 auth_form--button"
                  >
                    {{ $t("form.update") }}
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
import { useAccountStore } from "~~/src/store";
import { User } from "~~/src/types/Account";

const accountStore = useAccountStore();
const updateProfileStatus = computed(() => accountStore.getupdateProfileStatus);
const { t } = useI18n();
const errors: Ref<string[]> = ref([]);
const signupErrors = computed(() => accountStore.getErrors);
const editAccountStatus = computed(() => accountStore.getupdateProfileStatus)
// reset staff and spin staff
onNuxtReady(() => {
  accountStore.ResetUpdateProfileStatus();
});
const tmpUserInfo: User = JSON.parse(
  JSON.stringify(accountStore.getAccountInfo)
);
const firstName = ref(tmpUserInfo.firstname);
const lastName = ref(tmpUserInfo.lastname);
const email = ref(tmpUserInfo.email);
const birthday = ref(tmpUserInfo.birthday);
const handleFormSubmission = (event: MouseEvent) => {
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
  // // check password
  // if (!notEmptyString(birthday.value || "")) {
  //   errors.value = [...errors.value, t("form.errors.password_length")];
  // }
  if (!errors.value.length) {
    accountStore.updateInfo({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      birthday: birthday.value,
      password: "123456",
      gender: 1,
    });
  }
};
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
