import { defineStore } from "pinia";

import { menuItems } from "@/data/header/headerMenu";
import { skillsData } from "@/data/skills";
import { workCards } from "@/data/work/work";

export const useDataStore = defineStore({
    id: "dataStore",
    state: () => ({
        menuItems: menuItems,
        skillsCards: skillsData,
        workCards: workCards,
    }),
    getters: {
        getMenuItems(state) {
            return state.menuItems;
        },
        getSkillsCards(state) {
            return state.skillsCards;
        },
        getWorkCards(state) {
            return state.workCards;
        },
    },
    actions: {
        fetchSkillsCards() {
            this.skillsCards = skillsData;
        },
        fetchMenuLinks() {
            this.menuItems = menuItems;
        },
        fetchWorkCards() {
            this.workCards = workCards;
        },
    },
});