<template>
    <div class="header">
        <div class="header__label">
            <h1 class="header__logo font pro-display xl xl--700">Kukhmirov</h1>
        </div>
        <div class="header__menu">
            <nav>
                <RouterLink
                    v-for="({name, link}, index) in menuItems"
                    :key="link + index"
                    :to="link"
                    class="header__link"
                    @mouseenter="buttonEnter( $event, name)"
                    @mouseleave="buttonLeave"
                    @mousemove="buttonMove"
                >
                    {{ name }}
                </RouterLink>
            </nav>
            <button
                class="button header__button"
                @mouseenter="buttonEnter($event, 'Subscribe')"
                @mouseleave="buttonLeave"
                @mousemove="buttonMove"
            >
                Subscribe
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getMenuItems } from "@/data/header/headerMenu";
import { cursorPlugin } from "@/utils/cursor-style";


const menuItems = getMenuItems();

const buttonEnter = (e: MouseEvent, name: string) => {
    cursorPlugin.show(e, name);
};
const buttonMove = (e: MouseEvent) => {
    cursorPlugin.move(e);
};
const buttonLeave = (e: MouseEvent) => {
    cursorPlugin.hide(e);
};
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
    background-color: $black;
    z-index: 1000;
    &__logo {
        color: $white;
    }
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