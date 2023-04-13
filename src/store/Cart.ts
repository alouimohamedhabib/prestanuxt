import { defineStore } from "pinia";
import { PsdataCart } from "../types/CartType";

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cart: null as unknown as PsdataCart,
        }
    },
    actions: {
        setCartObject(cartObject: PsdataCart) {
            this.cart = cartObject
        }
    },
    getters: {
        getCartObject(state) {
            return state.cart
        }
    }
})