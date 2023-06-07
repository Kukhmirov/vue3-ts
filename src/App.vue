<template>
    <the-header />
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import TheHeader from "@/components/header/TheHeader.vue";
</script>