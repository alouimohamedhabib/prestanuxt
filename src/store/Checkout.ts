import { PropType } from "nuxt/dist/app/compat/capi";
import { defineStore } from "pinia";
import { AddressTypeObject } from "../types/AddressType";
import { APIResponseType } from "../types/ApiType";

export const useCheckoutStore = defineStore('checkout', {
    state: () => {
        return {
            selectedShippingAddress: NaN,
            shippingAddress: null as unknown as AddressTypeObject,
            carrierId: 4,
            paymentOptions: []
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
        async setSelectedShippingAddress(id: number) {
            this.selectedShippingAddress = id;
            // push info to the API
            const { data } = await useFetch('/api/address', {
                method: "POST",
                body: {
                    setCheckoutAddress: true,
                    id_address: id
                }
            })

        },
        async fetchPaymentOptions() {
            const { data } = await useFetch("/api/payment", {
                method: "POST",
                body: {
                    fetchAll: true
                }
            })
            console.log(data);
            return data.value
        }
    },
    getters: {
        getAddresses(state): AddressTypeObject {
            return state.shippingAddress
        },
        getSelectedShippingAddress(state): number {
            return state.selectedShippingAddress
        },
        getPaymentOptions(state) {
            return state.paymentOptions
        }
    }
})