<template>
  <div>
    <p>default NuxtLayout</p>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/plp">Product list</NuxtLink></li>
      <li><NuxtLink to="/pdp">Product details</NuxtLink></li>
      <li><NuxtLink to="/cart">Cart</NuxtLink></li>
      <li><NuxtLink to="/checkout">Checkout</NuxtLink></li>
    </ul>
    <h1>
      <i class="bi-alarm"></i>
      <i class="bi bi-6-square"></i>
    </h1>
    <NuxtPage />

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
