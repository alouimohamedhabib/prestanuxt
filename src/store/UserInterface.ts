import { defineStore } from "pinia";

export const useUserInterfaceStore = defineStore('userInterface', {
    state: () => {
        return {
            showMenu: false,
            defaultLanguage: 2, // 1: english , 2: french
        }
    },
    actions: {
        toggleMenuState() {
            this.showMenu = !this.showMenu
        },
        updateDefaultLanguage(selectedLanguage: number) {
            this.defaultLanguage = selectedLanguage
            
        }
    },
    getters: {
        getMenuState: (state: any) => { return state.showMenu },
        getDefaultLanguage: (state) => state.defaultLanguage
    }
})