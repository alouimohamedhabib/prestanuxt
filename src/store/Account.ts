import { defineStore } from "pinia";
import { APIResponseType } from "../types/ApiType";
import { AccountPsdata, User } from "../types/Account";

export const useAccountStore = defineStore("account", {
    state: () => {
        return {
            accountInfo: null as unknown as User,
            error: null as unknown as APIResponseType<AccountPsdata>
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
        }
    },
    getters: {
        getAccountInfo(state) {
            return state.accountInfo
        },
        getErrors(state): APIResponseType<AccountPsdata> {
            return state.error
        }
    }
})