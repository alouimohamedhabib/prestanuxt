import { defineStore } from "pinia";
import { BannerType } from "../types/ApiType";
import PagesNamesEnum from "../types/pagesType";

export const usePageStore = defineStore('page', {
    state: () => {
        return {
            homepage: {}
        }
    },
    actions: {
        async init(pageName: PagesNamesEnum) {
            // call server api
            const { data } = await useFetch("/api/page", {
                method: "POST",
                body: {
                    pageName
                }
            })

            this.homepage = data.value.psdata
        },
    },
    getters: {
        getHomepageImages(state): BannerType | undefined {
            return (state.homepage as any).banner
        }
    }
})