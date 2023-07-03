<template>
    <div
        ref="wrapper"
        class="slider__wrapper"
        @mousedown="startDrag"
        @mouseup="endDrag"
        @mousemove="drag"
        @touchstart="startDrag"
        @touchend="endDrag"
        @touchmove="drag"
        @mousewheel="wheelScroll"
    >
        <template
            v-for="(workCard, index) in workCards"
            :key="index"
        >
            <work-card 
                v-bind="workCard"
                :index-element="index"
                :current-index="currentIndex"
                @update:isOpenMobileWordCard="toggleMobileInfo(index)"
            />
        </template>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";

import WorkCard from "@/components/utility/WorkCard.vue";
import { useDataStore } from "@/stores/getData";


const workCards = useDataStore().getWorkCards;

let startX: number, startY: number, currentX: number, currentY: number;
let isDragging: Boolean = false;

const swipeDirection = (startX: number, startY: number, endX: number, endY: number) => {
    const dx = endX - startX;
    const dy = endY - startY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (absDx >= absDy && absDx >= 20) {
        return dx > 0 ? "right" : "left";
    } else {
        return "";
    }
};

// обработчик начала перетаскивания
const startDrag = (event: MouseEvent | TouchEvent) => {
    isDragging = true;
    startX = (event as MouseEvent)?.clientX || (event as TouchEvent).touches[0].clientX!;
};

// обработчик окончания перетаскивания
const endDrag = (event: MouseEvent | TouchEvent) => {
    isDragging = false;
    currentX = (event as MouseEvent).clientX || (event as TouchEvent).changedTouches[0].clientX;
    const direction = swipeDirection(startX, startY, currentX, currentY);
    if (direction === "left") {
        dragScroll(-300); // смещение влево на 300 пикселей
    } else if (direction === "right") {
        dragScroll(300); // смещение вправо на 300 пикселей
    }
};

// обработчик перетаскивания
const drag = (event: MouseEvent | TouchEvent) => {
    if (!isDragging) {
        return;
    }

    currentX = (event as MouseEvent).clientX || (event as TouchEvent).changedTouches[0].clientX;
    const diffX = currentX - startX;
    if (diffX !== 0) {
        dragScroll(-diffX);
    }
    startX = currentX;
};

// функция для прокрутки содержимого слайдера колесиком мыши
const wheelScroll = (event: WheelEvent) => {
    event.preventDefault();
    const deltaX = Math.round(event.deltaY || (-1 * (event as any).detail));
    dragScroll(deltaX);
};

// функция для прокрутки содержимого слайдера
const dragScroll = (deltaX: number) => {
    const wrapper = document.querySelector(".slider__wrapper");
    if (!wrapper) {
        return;
    }
    wrapper.scrollLeft += deltaX;
};

const currentIndex = ref(0);
const toggleMobileInfo = (index: number) => {
    currentIndex.value = index;
};
</script>
  
<style lang="scss" scoped>
@import "@/assets/style/colors.scss";

.slider {
    &__wrapper {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        min-height: 100%;
        width: 100%;
        margin-top: 30px;
        -webkit-overflow-scrolling: touch;
        overflow-x: scroll;
        @media (max-width: 767px) {
            flex-direction: column;
        }
        &::-webkit-scrollbar {
            background-color: $black;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: $white;
            &:active {
                background-color: $sun;
            }
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background-color: transparent;
        }
    }
}
</style>