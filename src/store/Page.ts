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
            console.log(data.value?.all);
            useCookie(
                "POC",
                {
                    default: () => ("def5020067b7c82d0c6e09205a9f17302c68e92e5dc9c8a44c8d0636c416327019ec321caa0b33b89253b87a120b833314d3038ed7536ef8d4367e6a3e59233e3db395e2d6882e4ee5f15eb67044430aa1f566de8acdb6387c773f6970823e6792f5725baca08f3ca9ef6fbfdccf27d92408f5b27d6b7a574853e81d89976ab7b7bd40674ce77264408d65fed1ee2828cbf8bfeee76723ce61"),
                    watch: false
                }
            )
            Object.keys(data.value?.all || {}).forEach(item => {
                if (item.indexOf("PrestaShop") != -1) {
                    useCookie(
                        item || '',
                        {
                            default: () => ("def5020067b7c82d0c6e09205a9f17302c68e92e5dc9c8a44c8d0636c416327019ec321caa0b33b89253b87a120b833314d3038ed7536ef8d4367e6a3e59233e3db395e2d6882e4ee5f15eb67044430aa1f566de8acdb6387c773f6970823e6792f5725baca08f3ca9ef6fbfdccf27d92408f5b27d6b7a574853e81d89976ab7b7bd40674ce77264408d65fed1ee2828cbf8bfeee76723ce61"),
                            watch: false
                        }
                    )

                }
            })




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
            return state.essentials
        }
    }
})
