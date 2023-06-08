<template>
    <div class="header">
        <div class="header__label">
            <img
                :src="logotip"
                alt="Логотип"
            >
        </div>
        <div class="header__menu">
            <nav>
                <RouterLink
                    v-for="({name, link}, index) in menuItems"
                    :key="link + index"
                    to="/"
                    class="header__link"
                    @mouseenter="buttonEnter(name)"
                    @mouseleave="buttonLeave"
                    @mousemove="buttonMove"
                >
                    {{ name }}
                </RouterLink>
            </nav>
            <button
                class="button header__button"
                @mouseenter="buttonEnter('Subscribe')"
                @mouseleave="buttonLeave"
                @mousemove="buttonMove"
            >
                Subscribe
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { logotip } from "@/assets/image/icons";
import { getMenuItems } from "@/data/header/headerMenu";
import { cursorPlugin } from "@/utils/cursor-style";


const menuItems = getMenuItems();

const buttonEnter = (name: string) => {
    cursorPlugin.show(name);
};
const buttonMove = (e: MouseEvent) => {
    cursorPlugin.move(e);
};
const buttonLeave = () => {
    cursorPlugin.hide();
};
</script>

<style scoped lang="scss">
@import "@/assets/style/colors.scss";

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 80px;
    background-color: $black;
    &__menu {
        display: flex;
        align-items: center;
    }
    &__link {
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