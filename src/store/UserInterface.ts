import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'
import { usePageStore } from "./Page";
import { Language } from "../types/PageType";
import { psModalStateType } from "../types/UIType";
export const useUserInterfaceStore = defineStore('userInterface', {
    state: () => {
        return {
            showMenu: false,
            defaultLanguage: useLocalStorage("defaultLanguage", ""),
            showSuggestionSpinner: false,
            psModalState: {} as unknown as psModalStateType
        }
    },
    actions: {
        toggleMenuState() {
            this.showMenu = !this.showMenu
        },
        updateDefaultLanguage(selectedLanguage: string) {
            this.defaultLanguage = selectedLanguage
        },
        updateSuggestionSpinner(spinnerState: boolean) {
            this.showSuggestionSpinner = spinnerState
        },
        updatePsModalState(psModalStateObject: psModalStateType) {
            this.psModalState = psModalStateObject
        },
        resetPsModalStateObject() {
            this.psModalState = {} as psModalStateType
        }
    },

    getters: {
        getMenuState: (state: any) => { return state.showMenu },
        getDefaultLanguage: (state) => state.defaultLanguage,
        getDefaultLanguageFromLocalStorage() {
            if (!process.server) {
                return localStorage.getItem('defaultLanguage')
            }
        },
        getlanguageById() {
            const pageStore = usePageStore()
            return (languageId: string) => {
                let selectedLanguage: Language | undefined = undefined
                pageStore.getLanguages?.languages.forEach((lang: Language) => {
                    if (lang.locale === languageId.toString())
                        selectedLanguage = lang
                })
                return selectedLanguage
            }
        },
        getSuggestionSpinner(state): boolean {
            return state.showSuggestionSpinner
        },
        getPsModalState(state): psModalStateType {
            return state.psModalState
        }
    }
})
