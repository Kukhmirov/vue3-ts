<template>
    <div class="preloader">
        {{ loadingText }}
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";


const loadingText = ref("Загрузка");

let intervalId: number | null = null;
let dotCount = 0;

onMounted(() => {
    intervalId = setInterval(() => {
        if(dotCount < 3) {
            loadingText.value += ".";
            dotCount++;
        } else {
            loadingText.value = "Загрузка";
            dotCount = 0;
        }
    }, 500);
});
onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});
</script>

<style scoped lang="scss">
.preloader {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: #999;
    height: 100%;
    max-width: 100%;
    background-color: #f8f8f8;
    border: 1px solid #eaeaea;
}
</style>