import { PiniaPluginContext, StateTree, SubscriptionCallbackMutation } from "pinia"

export default defineNuxtPlugin(({ $pinia }) => {
    $pinia.use(piniaLocalStoragePlugin)
})

async function piniaLocalStoragePlugin(context: PiniaPluginContext) {
    if (context.store.$id === "userInterface") {
        if (process.client) {
            const defaultPreselectedLanguage = localStorage.getItem('defaultLanguage') || undefined
            if (defaultPreselectedLanguage)
                context.store.$state.defaultLanguage = defaultPreselectedLanguage;
        }
        let defaultSelectedLanguage = undefined;
        context.store.$subscribe((event: SubscriptionCallbackMutation<StateTree>) => {
            if ((event.events as any).key === 'defaultLanguage') {
                localStorage.setItem('defaultLanguage', context.store.getlanguageById((event.events as any).newValue)?.locale)
            }
        })
    }

}