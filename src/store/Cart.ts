import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cart: 0,
        }
    },
    actions: {
        increment() {
            this.cart = 123
        },
    },
    getters: {
    }
})