import { defineStore } from "pinia";
import { APIResponseType } from "../types/ApiType";
import { OrderDetailsType, OrderHistorypsData } from "../types/OrderTypes";

export const useOrderStore = defineStore('orders', {
    state: () => {
        return {
            ordersHistory: null as unknown as OrderHistorypsData,
            orderDetails: null as unknown as OrderDetailsType,
        }
    },
    actions: {
        async fetchOrdersHistory() {
            const { data } = await useFetch("/api/order", {
                method: "POST",
                body: {
                    fetch: true
                }
            })
            const reponseObject = data?.value?._data as unknown as APIResponseType<OrderHistorypsData>
            if (reponseObject.code === 200) {
                this.ordersHistory = reponseObject.psdata
            }
        },
        async fetchOrderDetails(id_order: number) {
            const { data } = await useFetch("/api/order", {
                method: "POST",
                body: {
                    id_order
                }
            })
            const reponseObject = data?.value?._data as unknown as APIResponseType<OrderDetailsType>
            if (reponseObject.code === 200) {
                this.orderDetails = reponseObject.psdata
            }
        }
    },
    getters: {
        getOrdersHistory(state) {
            return state.ordersHistory
        },
        getOrdersDetails(state) {
            return state.orderDetails
        }
    }
})