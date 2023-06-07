// stores/counter.js

import { defineStore } from 'pinia'
import ApiFront from '../helpers/api.front'
import { APIResponseType, ParamsType } from '../types/ApiType'
import { Combination, Option, ProductType } from '../types/ProductType'
import { SuggestionsType } from '../types/SuggestionsType'
import { useUserInterfaceStore } from './UserInterface'
import { AddProductCartObjectType, PsdataCart } from '../types/CartType'
import { useCartStore } from './Cart'
import { ProductCart } from '../types/CartType'

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
            // reset on page load
            this.preAddToCartProductOptions = null as unknown as Combination
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
        },
        async addToCart(qty: number) {
            const cartStore = useCartStore()
            const uiStore = useUserInterfaceStore()
            // call the server API ( /api/cart)
            const cartProductObject: AddProductCartObjectType = {
                id_product: this.product.id_product,
                qty,
                update: 1
            }
            if (this.getPreAddToCartProductOptions?.id_product_attribute) {
                cartProductObject.id_product_attribute = this.getPreAddToCartProductOptions?.id_product_attribute
            }
            const { data } = await useFetch("/api/cart", {
                method: "POST",
                body: {
                    ...cartProductObject
                }
            })
            const reponseObject = data?.value?._data as unknown as APIResponseType<PsdataCart>
            const self = this
            if (reponseObject.code === 200) {
                cartStore.setCartObject(reponseObject.psdata)
                uiStore.updatePsModalState({
                    show: true,
                    type: "ok",
                    title: "success",
                    content: "product.add_to_cart_ok",
                    cb: {
                        "gotocart": {
                            label: "Go to cart",
                            cb: function () {
                                uiStore.resetPsModalStateObject()
                                self.router.push('/checkout/cart')
                            }
                        },
                        "keepshopping": {
                            label: "keep_shopping",
                            cb: () => uiStore.resetPsModalStateObject()
                        }
                    }
                })
            }
        },
        async updateCartItem(qty: number, productItem: ProductCart, op: "up" | 'down') {
            const cartStore = useCartStore()
            const uiStore = useUserInterfaceStore()
            // call the server API ( /api/cart)
            const cartProductObject: AddProductCartObjectType = {
                id_product: parseInt(productItem?.id_product),
                qty,
                op,
                update: 1,
                id_product_attribute: parseInt(productItem?.id_product_attribute) || NaN
            }

            const { data } = await useFetch("/api/cart", {
                method: "POST",
                body: {
                    ...cartProductObject,
                }
            })
            const reponseObject = data?.value?._data as unknown as APIResponseType<PsdataCart>
            const self = this
            if (reponseObject.code === 200) {
                cartStore.setCartObject(reponseObject.psdata)
                uiStore.updatePsModalState({
                    show: true,
                    type: "ok",
                    title: "success",
                    content: "product.add_to_cart_ok",
                    cb: {
                        "gotocart": {
                            label: "Go to cart",
                            cb: function () {
                                uiStore.resetPsModalStateObject()
                                self.router.push('/cart')
                            }
                        },
                        "keepshopping": {
                            label: "keep_shopping",
                            cb: () => uiStore.resetPsModalStateObject()
                        }
                    }
                })
            }
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
