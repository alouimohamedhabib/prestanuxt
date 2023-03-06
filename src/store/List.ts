import { defineStore } from "pinia";

export const useProductListStore = defineStore('list', {
    state: () => {
        return {
            products: []
        }
    },
    actions: {},
    getters: {
    }
})