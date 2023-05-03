import { SubscriptionCallbackMutation } from "pinia";
import { useAccountStore } from "../store"
import { User } from "../types/Account";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const accountStore = useAccountStore()
    accountStore.$subscribe((mutation, state) => {
        if (!state?.accountInfo?.active)
            navigateTo('/account')
    });



})