<template>
  <div class="footer">
    <div class="row">
      <div class="col-4 align-center">
        <NuxtLink to="/" :active-class="'active'"
          ><i class="bi bi-house"></i
        ></NuxtLink>
      </div>
      <div class="col-4 align-center">
        <NuxtLink to="/cart" :active-class="'active'">
          <i class="bi bi-cart4"></i
        ></NuxtLink>
      </div>
      <div class="col-4 align-center">
        <NuxtLink to="/account" :active-class="'active'">
          <i class="bi bi-person-fill"></i
        ></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.active {
  font-size: 1.2em;
  :after {
    content: "";
    font-size: 0.7em;
    position: absolute;
    background: grey;
    height: 10px;
    width: 10px;
    border-radius: 100%;
  }
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
  background-color: #ffffff;
  color: grey;
  text-align: center;
  padding: 1em;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
</style>
