<template>
    <div
        class="title__card"
    >
        <h1>
            <slot name="title" />
        </h1>
    </div>
</template>

<script setup lang="ts">
</script>
  
<style scoped lang="scss">
.title {
    &__card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        height: 100%;
        padding: 20px;
        backdrop-filter: blur(5px);
        background-color: rgba(255, 255, 255, 0.01);
        transition: background-color 0.3s ease-in-out;
        color: white;
        @media (max-width: 767px) {
            h1 {
                font-size: 22px;
            }
        }
        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
            cursor: none;
            &::before {
                opacity: 1;
            }
            &::after {
                opacity: 0.6;
            }
        }
        &::after {
            content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.07;
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
            opacity: 0.2;
            z-index: -1;
            background-color: rgba(255, 255, 255, 0.2);
            transition: opacity 0.3s ease-in-out;
        }
    }
    &__card-count {
        font-size: 48px;
    }
    &__description {
        text-align: center;
    }
}
</style>