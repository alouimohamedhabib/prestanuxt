<template>
  <div class="row">
    <div class="col-12">
      <h1>
        {{ $t("checkout.delivery.title") }}
      </h1>
    </div>
    <div class="col-12">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
          value="4"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          My static carrier
        </label>
      </div>
    </div>
    <div class="col-12">
      <NuxtLink class="dark-button mt-4 text-center" to="/checkout/payment">{{
        $t("checkout.next")
      }}</NuxtLink>
    </div>
  </div>
</template>
