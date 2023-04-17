import { defineStore } from "pinia";

export const useAccountStore = defineStore("account", {
    state: () => {
        return {
            accountInfo: []
        }
    },
    actions: {
        async auth(credentials: {
            email: string,
            password: string
        }) {
            const { data } = await useFetch('/api/auth', {
                method: "POST",
                body: {
                    ...credentials
                }
            })
        }
    },
    getters: {}
})