import { defineStore } from "pinia";
import PagesNamesEnum from "../types/pages";

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
        },
    },
    getters: {
    }
})