import { defineStore } from "pinia";
import { PsdataCart } from "../types/CartType";
import { APIResponseType } from "../types/ApiType";

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cart: null as unknown as PsdataCart,
        }
    },
    actions: {
        async fetchInformation() {
            const { data } = await useFetch("/api/cart", {
                method: "POST",
                body: {
                    fetch: true
                }
            })
            const reponseObject = data?.value?._data as unknown as APIResponseType<PsdataCart>
            const self = this
            if (reponseObject.code === 200) {
                this.cart = reponseObject.psdata
            }
        },
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