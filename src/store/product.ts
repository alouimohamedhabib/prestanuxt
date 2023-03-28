// stores/counter.js
import { PropType } from 'nuxt/dist/app/compat/capi'
import { defineStore } from 'pinia'
import ApiFront from '../helpers/api.front'
import { ParamsType } from '../types/ApiType'
import { SuggestionsType } from '../types/SuggestionsType'
import { useUserInterfaceStore } from './UserInterface'

export const useProductStore = defineStore('product', {
    state: () => {
        return {
            product: 0,
            productSearchSuggestion: undefined
        }
    },
    actions: {
        increment() {
            this.product++
        },
        resetSuggestion() {
            this.productSearchSuggestion = undefined
        },
        async search(path: string, params: ParamsType) {
            const UIStore = useUserInterfaceStore()
            UIStore.updateSuggestionSpinner(true)
            this.resetSuggestion()

            const data = await ApiFront({
                method: "POST",
                path,
                body: {
                    ...params
                }
            })
            console.log(data)
            UIStore.updateSuggestionSpinner(false)
            if (data.value.code === 200)
                this.productSearchSuggestion = data.value?.psdata
        }
    },
    getters: {
        getProductSearchSuggestion: (state): SuggestionsType | undefined => {
            return state.productSearchSuggestion
        }
    }
})
