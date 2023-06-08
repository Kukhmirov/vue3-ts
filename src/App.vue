<template>
    <the-header />
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import TheHeader from "@/components/header/TheHeader.vue";
</script>

<style lang="scss">
@import "@/assets/style/colors.scss";

.cursor {
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    min-width: 100px;
    height: 30px;
    padding: 0 5px;
    border: 2px solid #fff;
    border-radius: 5px;
    mix-blend-mode: difference;
    pointer-events: none;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ease;
    background-color: $lavender;
    z-index: 1000;
    color: $black;
    font-weight: bold;
    text-transform: uppercase;
}
</style>