<template>
    <div
        ref="skillSection"
        class="skill-section"
    >
        <div class="skill-section__list">
            <div
                v-for="(skill, index) in skillsDataCards"
                :key="skill.title + index"
                ref="skillCard"
                class="skill-section__card"
            >
                <div class="sskill-section__title">{{ skill.title }}</div>
                <div class="skill-section__progress-bar">
                    <div
                        class="skill-section__progress"
                    />
                </div>
                <div class="skill-section__percentage">{{ skill.count }}%</div>
                <div class="skill-section__description">{{ skill.description }}</div>
                <a
                    :href="skill.link"
                    class="skill-section__link"
                >
                    Подробнее
                </a>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

import { useDataStore } from "@/stores/getData";


const dataStore = useDataStore();
const skillsDataCards = dataStore.getSkillsCards;

const skillSection = ref();
const skillCards = ref();


onMounted(() => {
    dataStore.fetchSkillsCards();
    skillCards.value = skillSection.value?.querySelectorAll(".skill-section__card");
    window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
    for (let i = 0; i < skillCards.value.length; i++) {
        const card = skillCards.value[i];
        const position = card.getBoundingClientRect();

        const isAnimated = card.getAttribute("data-animated") === "true";

        if (
            position.top >= 0
            && position.bottom <= window.innerHeight
            && position.left >= 0
            && position.right <= window.innerWidth
            && !isAnimated
        ) {
            card.setAttribute("data-animated", "true");
            const { count } = skillsDataCards[i];
            const progressBar = card.querySelector(".skill-section__progress") as HTMLElement;
            let progress = 0;

            const animate = () => {
                if (progress < count) {
                    progress++;
                    progressBar.style.width = `${progress}%`;
                    requestAnimationFrame(animate);
                }
            };

            setTimeout(animate, 100);
        }
    }
};

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
  
<style scoped lang="scss">
  
.skill-section {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background: #FFFFFF;
    overflow: hidden;
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    &__card {
        width: 300px;
        height: 350px;
        margin: 20px;
        padding: 20px;
        background: white;
        border-radius: 10px;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        text-align: center;
        position: relative;
    }
    &__title {
        font-size: 24px;
        font-weight: bold;
    }
    &__progress-bar {
        width: 100%;
        height: 20px;
        margin: 20px 0;
        background: #f2f2f2;
        border-radius: 10px;
        position: relative;
    }
    &__progress {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: #3c434a;
        border-radius: 10px;
        transition: width 0.5s ease;
    }
    &__percentage {
        font-size: 24px;
        font-weight: bold;
    }
    &__description {
        margin: 20px 0;
        font-size: 16px;
    }
    &__link {
        font-size: 16px;
        color: #3c434a;
        font-weight: bold;
        text-decoration: none;
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
}
</style>