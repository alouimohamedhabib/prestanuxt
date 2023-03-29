// stores/counter.js

import { defineStore } from 'pinia'
import ApiFront from '../helpers/api.front'
import { ParamsType } from '../types/ApiType'
import { SuggestionsType } from '../types/SuggestionsType'
import { useUserInterfaceStore } from './UserInterface'

export const useProductStore = defineStore('product', {
    state: () => {
        return {
            product: [],
            productSearchSuggestion: null as unknown as SuggestionsType
        }
    },
    actions: {
        resetSuggestion() {
            this.productSearchSuggestion = null as unknown as SuggestionsType
        },
        // search for suggestion 
        async search(path: string, params: ParamsType) {
            const UIStore = useUserInterfaceStore()
            UIStore.updateSuggestionSpinner(true)
            this.resetSuggestion()

            const data = await ApiFront<SuggestionsType>({
                method: "POST",
                path,
                body: {
                    ...params
                }
            })
            UIStore.updateSuggestionSpinner(false)
            if (data.value.code === 200)
                this.productSearchSuggestion = data.value?.psdata || undefined
        }
    },
    getters: {
        getProductSearchSuggestion: (state): SuggestionsType => {
            return state.productSearchSuggestion
        }
    }
})
