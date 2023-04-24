import { defineStore } from "pinia";
import { APIResponseType } from "../types/ApiType";
import { OrderHistorypsData } from "../types/OrderTypes";

export const useOrderStore = defineStore('orders', {
    state: () => {
        return {
            ordersHistory: null as unknown as OrderHistorypsData
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
        }
    },
    getters: {
        getOrdersHistory(state) {
            return state.ordersHistory
        }
    }
})