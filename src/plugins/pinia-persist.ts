import { PiniaPluginContext, StateTree, SubscriptionCallbackMutation } from 'pinia'

export default defineNuxtPlugin(({ $pinia }) => {
    $pinia.use(SecretPiniaPlugin)
})

async function SecretPiniaPlugin(context: PiniaPluginContext) {
    if (context.store.$id === "userInterface") {
        // read data from LS
        if (!process.server) {
            const defaultLanguageFromStorage = localStorage.getItem("defaultLanguage")
            context.store.$state.defaultLanguage = defaultLanguageFromStorage

        }
        let defaultPreselectedLanguage = undefined
        context.store.$subscribe((event: SubscriptionCallbackMutation<StateTree>) => {
            if ((event.events as any).key === "defaultLanguage") {
                localStorage.setItem("defaultLanguage", (event.events as any).newValue || false)
            }
        })
    }

    return {}
}

