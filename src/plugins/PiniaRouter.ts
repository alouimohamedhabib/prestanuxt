export default defineNuxtPlugin(({ $pinia, $router }) => { // NUXT CONTEXT
    $pinia.use(({ store }) => { // PINIA CONTEXT
        store.router = $router
    })
})

