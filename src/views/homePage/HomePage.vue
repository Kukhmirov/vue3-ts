<template>
    <div class="main">
        <div class="main__wrapper-title">
            <h3
                ref="title"
                class="main__title font pro-display xl xl--700"
            >
                {{ displayText }}
            </h3>
        </div>
        <div class="main__content">
            <skills-card
                v-for="(item, index) in menuItems"
                :key="item.title + index"
                @mouseenter="buttonEnter($event)"
                @mouseleave="buttonLeave"
                @mousemove="buttonMove"
            >
                <template v-slot:title>
                    {{ item.title }}
                </template>
                <template v-slot:count>
                    {{ item.count }}
                </template>
                <template v-slot:description>
                    {{ item.description }}
                </template>
            </skills-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import SkillsCard from "@/components/utility/SkillsCard.vue";
import { getSkillsCards } from "@/data/skills";
import { cursorPlugin } from "@/utils/cursor-style";

const menuItems = getSkillsCards();

const buttonEnter = (e: MouseEvent, name?: string) => {
    cursorPlugin.show(e, name);
};
const buttonMove = (e: MouseEvent) => {
    cursorPlugin.move(e);
};
const buttonLeave = (e: MouseEvent) => {
    cursorPlugin.hide(e);
};

const text = "Решаю сложные задачи в веб-разработке и делаю вашу жизнь проще!";
const index = ref(0);
const displayText = ref("");

const setText = () => {
    displayText.value = text.slice(0, index.value);
    if (index.value < text.length) {
        index.value++;
        setTimeout(setText, 50);
    }
};

onMounted(() => {
    setText();
});

</script>

<style scoped lang="scss">
.main {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: calc(100vh - 80px);
    padding: 0 80px;
    z-index: 1;
    &__wrapper-title {
        color: aliceblue;
    }
    &__title {
        max-width: 50vh;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(to right, white, rgb(253, 99, 38));
    }
    &__content {
        height: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 50px;
    }
}
</style>