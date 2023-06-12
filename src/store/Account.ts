import { defineStore } from "pinia";
import { APIResponseType } from "../types/ApiType";
import { AccountPsdata, PsdataEditAccount, User } from "../types/Account";

export const useAccountStore = defineStore("account", {
    state: () => {
        return {
            accountInfo: null as unknown as User,
            error: null as unknown as APIResponseType<AccountPsdata>,
            fetching: true,
            signOutOk: false,
            showSigninForm: true,
            updateProfileStatus: "",
            refreshAccount: false,
        }
    },
    actions: {
        ResetUpdateProfileStatus() {
            this.updateProfileStatus = ""
        },
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
        async updateInfo(credentials: {
            firstName: string,
            lastName: string,
            email: string,
            birthday: string,
            password: string,
            gender: number
        }) {
            const { data } = await useFetch('/api/auth', {
                method: "POST",
                body: {
                    edit: true,
                    ...credentials
                }
            })

            const responseObject = data?.value?._data as unknown as APIResponseType<PsdataEditAccount>
            if (responseObject.code === 200) {
                this.updateProfileStatus = "ok"
                this.refreshAccount = true
            } else {
                this.updateProfileStatus = "ko"
            }
        },
        async register(credentials: {
            firstName: string,
            lastName: string,
            email: string,
            password: string
        }) {
            const { data } = await useFetch('/api/auth', {
                method: "POST",
                body: {
                    register: true,
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
            if (responseObject?.code === 200) {
                this.accountInfo = responseObject.psdata as unknown as User
            }
        },
        async logout() {
            const { data, pending } = await useLazyFetch('/api/auth', {
                method: "POST",
                body: {
                    logout: true
                }
            })
            const responseObject = data?.value?._data as unknown as APIResponseType<AccountPsdata>
            if (responseObject.code === 200) {
                this.accountInfo = null as unknown as User
                this.signOutOk = true
            }
        },
        // dismissSignOutOk
        dismissSignOutOk() {
            this.signOutOk = false
        },
        defineShowSigninForm() {
            this.showSigninForm = !this.showSigninForm
        }
    },
    getters: {
        getrefreshAccount(state) {
            return state.refreshAccount
        },
        getupdateProfileStatus(state) {
            return state.updateProfileStatus
        },
        getsignOutOk(state) {
            return state.signOutOk
        },
        getFetching(state) {
            return state.fetching
        },
        getAccountInfo(state) {
            return state.accountInfo
        },
        getErrors(state): APIResponseType<AccountPsdata> {
            return state.error
        },
        getshowSigninForm(state) {
            return state.showSigninForm
        }
    }
})