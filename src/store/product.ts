// stores/counter.js
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
    state: () => {
        return { product: 0 }
    },
    actions: {
        increment() {
            this.product++
        },
    },
})
