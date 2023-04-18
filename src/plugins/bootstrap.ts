import { useAccountStore, useCartStore, usePageStore } from "../store";

export default defineNuxtPlugin((ctx) => {
    onNuxtReady(async () => {
        const pageStore = usePageStore()
        const cartStore = useCartStore()
        const accountStore = useAccountStore()

        await pageStore.bootstrapApp()
        await cartStore.fetchInformation()
        accountStore.fetch()
    })
})