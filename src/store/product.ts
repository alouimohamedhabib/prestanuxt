import { defineStore } from "pinia";

export const useProductStore = defineStore('product', {
    state: () => {
        return {
            product: []
        }
    },
    actions: {},
    getters: {
    }
})