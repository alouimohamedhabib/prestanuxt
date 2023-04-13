import { useCartStore, usePageStore } from "../store";

export default defineNuxtPlugin((ctx) => {
    onNuxtReady(async () => {
        const pageStore = usePageStore()
        const cartStore = useCartStore()
        await pageStore.bootstrapApp()
        cartStore.fetchInformation()

    })
})