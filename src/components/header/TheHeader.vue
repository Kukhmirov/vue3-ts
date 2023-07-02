<template>
    <div class="header">
        <div class="header__label">
            <h1 class="header__logo font pro-display xl xl--700">Kukhmirov</h1>
        </div>
        <div class="header__menu">
            <p
                v-for="({name}, index) in menuLinks"
                :key="name + index"
                class="header__link"
                @mouseenter="buttonEnter( $event, name)"
                @mouseleave="buttonLeave"
                @mousemove="buttonMove"
                @click="(event) => showDescription(event, name)"
            >
                {{ name }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import { EMITS, MODAL_TYPE } from "@/data/constants/modalName";
import { useDataStore } from "@/stores/getData";
import { cursorPlugin } from "@/utils/cursor-style";


const menuItems = useDataStore();
const emit = defineEmits([ EMITS.isOpen ]);

const contentHidden = true;

const buttonEnter = (e: MouseEvent, name?: string) => {
    cursorPlugin.show(e, name, contentHidden);
};
const buttonMove = (e: MouseEvent) => {
    cursorPlugin.move(e);
};
const buttonLeave = (e: MouseEvent) => {
    cursorPlugin.hide(e);
};

const openModal: Boolean = true;

const showDescription = (event: Event, title: string) => {
    if(title === MODAL_TYPE.WORK) {
        const workCards = useDataStore();
        workCards.fetchWorkCards();
    }
    if(title === MODAL_TYPE.CONNECT) {
        const contactsData = useDataStore();
        contactsData.fetchContactData();
    }

    emit(EMITS.isOpen, openModal, title);
};

onMounted(() => {
    menuItems.fetchMenuLinks();
});

const menuLinks = menuItems.getMenuItems;
</script>

<style scoped lang="scss">
@import "@/assets/style/colors.scss";

.header {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    height: 80px;
    padding: 0 80px;
    background: transparent;
    z-index: 9;
    &__logo {
        color: $white;
    }
    &__menu {
        display: flex;
        align-items: center;
    }
    &__link {
        display: flex;
        flex-direction: row;
        position: relative;
        color: $white;
        margin-left: 24px;
        padding: 4px 5px;
        text-decoration: none;
        border: 0.5px solid transparent;
        transition: border 0.3s ease-in-out;
        cursor: none;
    }
    &__button {
        position: relative;
        margin-left: 62px;
        width: 180px;
        background-color: $white;
        color: $black;
        cursor: none;
        &::after {
            content: '';
            position: absolute;
            width: 220px;
            height: 100px;
            left: -20px;
            top: -30px;
        }
    }
}
</style>