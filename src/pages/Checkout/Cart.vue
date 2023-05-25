<template>
  <div class="cart">
    <h1>{{ $t("checkout.cart.h1") }}</h1>
    <SpinnerDummy v-if="!cartItems" />
    <div class="" v-if="cartItems">
      <div>
        <div
          class="cart--item mb-2 pt-2 pb-2"
          v-for="(product, index) of cartItems?.products"
          :key="index"
        >
          <div class="row">
            <div class="col-3">
              <img
                class="cart--item__img rounded"
                :src="product.image_url"
                alt=""
              />
            </div>
            <div class="col-9">
              <div class="row">
                <div class="col-12">
                  <p class="cart--item__name">{{ product.name }}</p>
                  <p class="cart--item__refrence">{{ product.reference }}</p>
                </div>
                <div class="col-12">
                  <div class="row">
                    <div class="col-6">
                      <p class="cart--item__total">
                        {{ product.formatted_total }}
                      </p>
                    </div>
                    <div class="col-6">
                      <LazyPdpBuyboxQuantityControl
                        class="cart--item__qtyControl"
                        @quantityUpdate="quantityUpdateInterceptor"
                        :cart_Quantity="parseInt(product.cart_quantity)"
                        :product_id="product.id_product"
                        :productCart="product"
                        :quantity="parseInt(product.quantity_available)"
                        :minimal_quantity="product.minimal_quantity"
                        :allow_out_of_stock="JSON.stringify(product.allow_oosp)"
                        :available_for_order="product.available_for_order"
                        :disableWatchKeyUp="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckoutCartTotalInfo
        :total="cartItems.subtotals.products.value"
        :shipping-total="cartItems.subtotals.shipping.value"
        :bag-total="cartItems.totals.total.value"
      />
      <!-- Checkout next page -->
      <div class="mt-5">
        <NuxtLink
          :to="'/checkout/shipping'"
          class="dark-button d-block text-center"
        >
          {{ $t("checkout.next") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ProductCart } from "~~/src/types/CartType";
import { useCartStore, useProductStore } from "../../store";
import SpinnerDummy from "~~/src/components/Atoms/SpinnerDummy.vue";
const cartStore = useCartStore();
const productStore = useProductStore();
const cartItems = computed(() => cartStore.getCartObject);
const quantityUpdateInterceptor = (
  qty: number,
  productCart: ProductCart | undefined,
  product_id?: string | undefined,
  action?: string | undefined
): void => {
  const actionStr: "up" | "down" = action === "+" ? "up" : "down";
  // always add/remove one item of the current product
  productStore.updateCartItem(1, productCart as ProductCart, actionStr);
};
</script>

<style lang="scss" scoped>
.cart {
  &--item {
    &:not(:last-child) {
      border-bottom: 1px solid lightgrey;
    }

    &__img {
    }
    &__name {
      font-size: 1em;
      margin: 0;
      margin-bottom: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &__refrence {
      font-size: 0.8em;
      margin: 0;
      margin-bottom: 5px;
      opacity: 0.7;
    }
    &__total {
      font-weight: bold;
      font-size: 1em;
    }
    &__qtyControl {
    }
  }
}
</style>
