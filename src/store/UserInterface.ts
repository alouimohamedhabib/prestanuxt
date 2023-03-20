import { defineStore } from "pinia";

export const useUserInterfaceStore = defineStore('userInterface', {
    state: () => {
        return {
            showMenu: false,
            defaultLanguage: 1, // 1: english , 2: french
        }
    },
    actions: {
        toggleMenuState() {
            this.showMenu = !this.showMenu
        },
        updateDefaultLanguage(languageCOde: number) {
            this.defaultLanguage = languageCOde
        }
    },
    getters: {
        getMenuState: (state: any) => { return state.showMenu },
    }
})