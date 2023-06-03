import { PropType } from "nuxt/dist/app/compat/capi";
import { defineStore } from "pinia";
import { AddressTypeObject } from "../types/AddressType";
import { APIResponseType } from "../types/ApiType";

export const useCheckoutStore = defineStore('checkout', {
    state: () => {
        return {
            selectedShippingAddress: NaN,
            shippingAddress: null as unknown as AddressTypeObject
        }
    },
    actions: {
        // fetch shipping addresses
        async fetchAddresses() {
            const { data } = await useFetch('/api/address', {
                method: "POST",
                body: {
                    fetchAll: true
                }
            })
            const reponseObject = data?.value?._data as unknown as APIResponseType<AddressTypeObject>

            if (reponseObject.code === 200) {
                this.shippingAddress = reponseObject.psdata

            }
        },
        setSelectedShippingAddress(id: number) {
            this.selectedShippingAddress = id
        }
    },
    getters: {
        getAddresses(state): AddressTypeObject {
            return state.shippingAddress
        },
        getSelectedShippingAddress(state): number {
            return state.selectedShippingAddress
        }
    }
})