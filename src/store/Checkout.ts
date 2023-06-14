import { defineStore } from "pinia";
import { AddressTypeObject } from "../types/AddressType";
import { APIResponseType } from "../types/ApiType";
import { PSPaymentOption, PaymentOption } from "../types/PaymentOptionsType";
import { OrderPaymentResponseType, PaymentResponseType } from "../types/PaymentResponseType";
export const useCheckoutStore = defineStore('checkout', {
    state: () => {
        return {
            selectedShippingAddress: NaN,
            shippingAddress: null as unknown as AddressTypeObject,
            carrierId: 4,
            paymentOptions: null as unknown as PaymentOption,
            paymentSubmitted: false,
            paymentSubmissionResponse: null as unknown as OrderPaymentResponseType | {},
            paymentSubmissionResponseError: {}
        }
    },
    actions: {
        $reset() {
            this.paymentSubmissionResponse = this.paymentSubmissionResponseError = {}
        },
        init() {
            this.$reset()
        },
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
            const reponseObject = data?.value?._data as unknown as APIResponseType<PaymentOption>
            if (reponseObject.code === 200) {
                this.paymentOptions = reponseObject.psdata
                this.paymentOptions
            }
            // TODO handle ERROS
        },
        async dispatchPaymentMethod(selectedPaymentOpt: string) {
            if (!selectedPaymentOpt)
                return
            const { data } = await useFetch("/api/payment", {
                method: "POST",
                body: {
                    pay: true,
                    paymentMethodName: selectedPaymentOpt
                }
            })
            const reponseObject = data?.value?._data as unknown as APIResponseType<PaymentResponseType>
            if (reponseObject.code === 200) {
                {
                    this.paymentSubmissionResponse = reponseObject.psdata.order
                    this.paymentSubmitted = true
                }
            } else {
                this.paymentSubmissionResponseError = reponseObject.psdata
                this.paymentSubmitted = false
            }
        },

    },
    getters: {
        getAddresses(state): AddressTypeObject {
            return state.shippingAddress
        },
        getSelectedShippingAddress(state): number {
            return state.selectedShippingAddress
        },
        getPaymentOptions(state): PSPaymentOption[][] {
            const normalizedPaymentOption = Object.values(state?.paymentOptions || {})
            return normalizedPaymentOption
        },
        getPaymentSubmissionResponse(state) {
            return state.paymentSubmissionResponse
        },
        getPaymentSubmissionResponseError(state) {
            return state.paymentSubmissionResponseError
        },
        getPaymentSubmitted(state) {
            return state.paymentSubmitted
        }
    }
})