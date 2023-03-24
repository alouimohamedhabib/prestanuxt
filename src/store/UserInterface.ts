

import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'
export const useUserInterfaceStore = defineStore('userInterface', {
    state: () => {
        return {
            count: useLocalStorage('count', 0),
            showMenu: false,
            defaultLanguage: useLocalStorage("defaultLanguage", 123), // 1: english , 2: french
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
                console.log("->: :)ss  ===", localStorage.getItem('defaultLanguage'));
                return localStorage.getItem('defaultLanguage')
            }
        },
        get: () => {
            return "$"
        }
    }
})
