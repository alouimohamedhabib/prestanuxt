import { defineStore } from "pinia";

export const useUserInterfaceStore = defineStore('userInterface', {
    state: () => {
        return {
            showMenu: false
        }
    },
    actions: {
        toggleMenuState() {
            this.showMenu = !this.showMenu
        }
    },
    getters: {
        getMenuState: (state: any) => { return state.showMenu },
    }
})