export default defineNuxtPlugin((ctx) => {
    onNuxtReady(async () => {
        const data = await useFetch("/api/bootstrap");
    })
})