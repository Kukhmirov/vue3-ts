<template>
    <div
        class="work-card"
    >
        <img
            :src=imgLink
            :alt=imgAlt
        >
        <div class="work-card__info">
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

interface WorkCardProps {
    title: string;
    description: string;
    imgLink: string;
    imgAlt: string;
    outSideLink?: string;
}

const props = defineProps<WorkCardProps>();

</script>

<style lang="scss" scoped>
.work-card {
    position: relative;
    height: 350px;
    max-width: 600px;
    margin: 0 5px 10px 0;
    overflow: hidden;
    border-radius: 16px;
    flex-shrink: 0;
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
        top: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        display: flex;
        flex-direction: column;
        padding: 20px;
        opacity: 0;
        transition: all 0.2s ease-out;
    }
    &:hover &__info {
        top: 0;
        opacity: 1;
    }
}
</style>