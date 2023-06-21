import { defineStore } from "pinia";

import { menuItems } from "@/data/header/headerMenu";
import { skillsData } from "@/data/skills";

export const useDataStore = defineStore({
    id: "dataStore",
    state: () => ({
        menuItems: menuItems,
        skillsCards: skillsData,
    }),
    getters: {
        getMenuItems(state) {
            return state.menuItems;
        },
        getSkillsCards(state) {
            return state.skillsCards;
        },
    },
    actions: {
        fetchSkillsCards() {
            this.skillsCards = skillsData;
        },
        fetchMenuLinks() {
            this.menuItems = menuItems;
        },
    },
});