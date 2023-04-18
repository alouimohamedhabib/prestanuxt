import { defineStore } from "pinia";
import { APIResponseType } from "../types/ApiType";
import { AccountPsdata, User } from "../types/Account";

export const useAccountStore = defineStore("account", {
    state: () => {
        return {
            accountInfo: null as unknown as User,
            error: null as unknown as APIResponseType<AccountPsdata>,
            fetching: true
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
            const responseObject = data?.value?._data as unknown as APIResponseType<AccountPsdata>
            if (responseObject.code === 200) {
                this.accountInfo = responseObject.psdata.user
                this.error = null as unknown as APIResponseType<AccountPsdata>
            } else {
                this.error = responseObject
                this.accountInfo = null as unknown as User
            }
        },
        async fetch() {
            const { data, pending } = await useLazyFetch('/api/auth', {
                method: "POST",
                body: {
                    fetch: true
                }
            })
            if (!pending.value)
                this.fetching = false

            const responseObject = data?.value?._data as unknown as APIResponseType<AccountPsdata>
            if (responseObject.code === 200) {
                this.accountInfo = responseObject.psdata as unknown as User
            }
        }
    },
    getters: {
        getFetching(state) {
            return state.fetching
        },
        getAccountInfo(state) {
            return state.accountInfo
        },
        getErrors(state): APIResponseType<AccountPsdata> {
            return state.error
        }
    }
})