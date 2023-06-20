<template>
    <div
        class="skills__card"
        @mouseenter="buttonEnter($event)"
        @mouseleave="buttonLeave"
        @mousemove="buttonMove"
    >
        <h5>
            <slot name="title" />
        </h5>
        <span class="skills__card-count">
            <slot name="count" />
        </span>
        <p>
            <slot name="description" />
        </p>
    </div>
</template>

<script setup lang="ts">
import { cursorPlugin } from "@/utils/cursor-style";

const buttonEnter = (e: MouseEvent, name?: string) => {
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
    .skills__card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        height: 200px;
        background-color: rgba(255, 255, 255, 0.04);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 20px;
        opacity: 0.3;
        backdrop-filter: blur(5px);
        transition: opacity 0.3s ease-in-out;
        color: white;
   
    &:hover {
        opacity: 0.5;
        &::before {
            opacity: 1;
        }
        &::after {
            opacity: 1;
        }
    }
  
    &::after {
        content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.2;
            z-index: 1;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                0 0 50px rgba(255, 255, 255, 0.6),
                0 0 80px rgba(255, 255, 255, 0.4),
                0 0 100px rgba(255, 255, 255, 0.2);
            transition: opacity 0.3s ease-in-out;
    }
  
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.4;
        z-index: -1;
        background-color: rgba(255, 255, 255, 0.2);
        transition: opacity 0.3s ease-in-out;
    }
  
    .skills__card-count {
        font-size: 48px;
    }
}
  </style>