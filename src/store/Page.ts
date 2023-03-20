import { defineStore } from "pinia";
import { BannerType } from "../types/ApiType";
import PagesNamesEnum from "../types/pagesType";
import { FeaturedProductsList, Languages, PageType } from "../types/PageType";
import { ProductType } from "../types/ProductType";
interface State {
    homepage: PageType | undefined
}

export const usePageStore = defineStore('page', {
    state: (): State => {
        return {
            homepage: undefined
        }
    },
    actions: {
        async init(pagePath: string) {
            // call server api
            const { data } = await useFetch("/api/page", {
                method: "POST",
                body: {
                    path: pagePath
                }
            })

            this.homepage = data.value.psdata
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
            return state.homepage?.languages
        }
    }
})
