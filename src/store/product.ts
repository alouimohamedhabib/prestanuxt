// stores/counter.js

import { defineStore } from 'pinia'
import ApiFront from '../helpers/api.front'
import { ParamsType } from '../types/ApiType'
import { Combination, Option, ProductType } from '../types/ProductType'
import { SuggestionsType } from '../types/SuggestionsType'
import { useUserInterfaceStore } from './UserInterface'

export const useProductStore = defineStore('product', {
    state: () => {
        return {
            product: null as unknown as ProductType,
            productSearchSuggestion: null as unknown as SuggestionsType,
            preAddToCartProductOptions: null as unknown as Combination
        }
    },
    actions: {
        async init(path: string, params: ParamsType) {
            const data = await ApiFront<ProductType>({
                method: "POST",
                path,
                body: {
                    ...params
                }
            })
            if (data.value.code === 200)
                this.product = data.value?.psdata || undefined
        },
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
        },
        setPreAddToCartProductOptions(id_product_attribute: string) {
            // fetch inside combinations 
            const g = this.product.combinations.filter(combination => combination.combination_code === id_product_attribute)
            this.preAddToCartProductOptions = g[0] || null
        }
    },
    getters: {
        getProductDetails(state): ProductType {
            return state.product
        },
        getProductSearchSuggestion: (state): SuggestionsType => {
            return state.productSearchSuggestion
        },
        getProductOptions: (state): Option[] => {
            return state.product.options
        },
        getPreAddToCartProductOptions(state): Combination | undefined {
            return state.preAddToCartProductOptions
        }
    }
})
