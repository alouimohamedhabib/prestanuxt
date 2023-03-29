import { defineStore } from "pinia";
import ApiFront from "../helpers/api.front";
import { APIResponseType, ParamsType } from "../types/ApiType";
import { SuggestionsType } from "../types/SuggestionsType";
import { useProductStore } from "./product";

export const useProductListStore = defineStore('list', {
    state: () => {
        return {
            products: [],
            searchProductsList: Object as unknown as SuggestionsType
        }
    },
    actions: {
        async init(path: string, params: ParamsType) {
            const data = await ApiFront<SuggestionsType>({
                method: "POST",
                path,
                body: {
                    ...params
                }
            })
            if (data.value.code === 200)
                this.searchProductsList = data.value?.psdata
        }
    },
    getters: {
        getsearchProductsList(state): SuggestionsType {
            return state.searchProductsList
        }
    }
})