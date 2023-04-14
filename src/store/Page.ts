import { defineStore } from "pinia";
import ApiFront from "../helpers/api.front";
import { APIResponseType, BannerType, EssentialsType } from "../types/ApiType";
import { FeaturedProductsList, Languages, PageType } from "../types/PageType";


interface State {
    homepage: PageType | undefined,
    essentials: EssentialsType
}

export const usePageStore = defineStore('page', {
    state: (): State => {
        return {
            homepage: undefined,
            essentials: null as unknown as EssentialsType
        }
    },
    actions: {
        async bootstrapApp() {
            const { data } = await useFetch("/api/bootstrap");
            const apiReponse = (data.value?._data as unknown as APIResponseType<EssentialsType>)
            this.essentials = apiReponse.psdata
        },
        async init(pagePath: string) {
            // call server api
            const data = await ApiFront<PageType>({
                method: "POST",
                path: pagePath,
                body: {
                    menu_with_images: "single"
                }
            })

            this.homepage = data.value?.psdata
        },
    },
    getters: {
        getHomepageImages(state): BannerType | undefined {
            return state.homepage?.banner
        },
        getPageFeaturedProducts(state): FeaturedProductsList[] | undefined {
            return state.homepage?.featuredProductsList
        },
        getLanguages(state): Languages | undefined {
            return state.essentials?.languages
        },
        getPageEssentials(state): EssentialsType {
            return  state.essentials
        }
    }
})
