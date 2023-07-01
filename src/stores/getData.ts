import { defineStore } from "pinia";

import { menuItems } from "@/data/header/headerMenu";
import { contactsData } from "@/data/info";
import { skillsData } from "@/data/skills";
import { workCards } from "@/data/work/work";

export const useDataStore = defineStore({
    id: "dataStore",
    state: () => ({
        menuItems: menuItems,
        skillsCards: skillsData,
        contactsData: contactsData,
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
        getContactsData(state) {
            return state.contactsData;
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
        fetchContactData() {
            this.contactsData = contactsData;
        },
    },
});