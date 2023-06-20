<template>
    <div class="main">
        <div class="main__title">
            <h3>Решаю сложные задачи в веб-разработке и делаю вашу жизнь проще!</h3>
        </div>
        <div class="main__content">
            <skills-card
                v-for="(item, index) in menuItems"
                :key="item.title + index"
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
import SkillsCard from "@/components/utility/SkillsCard.vue";
import { getSkillsCards } from "@/data/skills";

const menuItems = getSkillsCards();

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
    &__title {
        color: aliceblue;
    }
    &__content {
        height: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 20px;
    }
}
</style>