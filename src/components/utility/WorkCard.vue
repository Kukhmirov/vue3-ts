<template>
    <div
        class="work-card"
        @click="toggleMobileInfo"
    >
        <Loader v-if="!isImgLoaded" />
        <img
            :src=imgLink
            :alt=imgAlt
            @load="isImgLoaded = true"
        >
        <div
            class="work-card__info"
            :class="{ 'active': isActive }"
        >
            <h1 class="font pro-display s s--500">
                {{ title }}
            </h1>
            <p class="font pro-display s s--500">
                {{ description }}
            </p>
            <a
                v-if="outSideLink"
                :href=outSideLink
                target="_blank"
            >
                Перейти...
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import Loader from "@/components/loader/DefaultLoader.vue";
import { EMITS } from "@/data/constants/modalName";


interface WorkCardProps {
    title: string;
    description: string;
    imgLink: string;
    imgAlt: string;
    outSideLink?: string;
    indexElement: number;
    currentIndex: number;
}

const props = defineProps<WorkCardProps>();
const emit = defineEmits([ EMITS.isOpenMobileWordCard ]);

const isImgLoaded = ref(false);

const isMobile = ref(window.matchMedia("(max-width: 767px)").matches);

const showInfo = ref(false);
const isActive = computed(() => {
    return showInfo.value && props.indexElement === props.currentIndex;
});

const toggleMobileInfo = () => {
    if(isMobile.value) {
        emit(EMITS.isOpenMobileWordCard, props.indexElement);
        showInfo.value = true;
    }
};
</script>

<style lang="scss" scoped>
.work-card {
    position: relative;
    height: 350px;
    width: 100%;
    max-width: 600px;
    margin: 0 5px 10px 0;
    overflow: hidden;
    border-radius: 16px;
    flex-shrink: 0;
    @media (max-width: 767px) {
        max-width: 300px;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: solid 8px #fff;
        border-radius: 16px;
        pointer-events: none;
        transition: transform 0.3s ease-out;
    }
    &:hover img {
        transform: scale(1.05);
    }
    &__info {
        position: absolute;
        top: 100%;
        left: 0;
        transform: translateY(-100%);
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        display: flex;
        flex-direction: column;
        padding: 20px;
        opacity: 0;
        transition: all 0.2s ease-out;
        @media(max-width: 767px) {
            left: -100%;
        }
        &.active {
            top: 0;
            opacity: 1;
            left: 0;
            transform: translateY(0%);
        }
    }
    @media (min-width: 767px) {
        &:hover &__info {
            top: 0;
            opacity: 1;
            transform: translateY(0%);
        }
    }
}
</style>