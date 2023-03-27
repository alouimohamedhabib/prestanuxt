import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'
import { usePageStore } from "./Page";
import { Language } from "../types/PageType";
export const useUserInterfaceStore = defineStore('userInterface', {
    state: () => {
        return {
            count: useLocalStorage('count', 0),
            showMenu: false,
            defaultLanguage: useLocalStorage("defaultLanguage", 123),
        }
    },
    actions: {
        toggleMenuState() {
            this.showMenu = !this.showMenu
        },
        updateDefaultLanguage(selectedLanguage: number) {
            this.defaultLanguage = selectedLanguage
        },

    },

    getters: {
        getMenuState: (state: any) => { return state.showMenu },
        getDefaultLanguage: (state) => state.defaultLanguage,
        getDefaultLanguageFromLocalStorage() {
            if (!process.server) {
                return localStorage.getItem('defaultLanguage')
            }
        },
        getlanguageById(state) {
            const pageStore = usePageStore()
            return (languageId: string) => {
                let selectedLanguage: Language | undefined = undefined
                pageStore.getLanguages?.languages.forEach((lang: Language) => {
                    if (lang.id_lang === languageId.toString())
                        selectedLanguage = lang
                })
                return selectedLanguage
            }
        }
    }
})
