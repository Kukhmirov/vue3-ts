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
                >
                    {{ name }}
                </RouterLink>
            </nav>
            <button class="header__button">Subscribe</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { logotip } from "@/assets/image/icons";
import { getMenuItems } from "@/data/header/headerMenu";


const menuItems = getMenuItems();
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
        color: $white;
        margin-left: 24px;
        text-decoration: none;
    }
    &__button {
        margin-left: 32px;
        width: 180px;
        background-color: $white;
    }
}
</style>