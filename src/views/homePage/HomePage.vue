<template>
    <div class="main">
        <div class="main__title">
            <h3>Das ist gud</h3>
        </div>
        <div class="main__content">
            <div class="main__card">
                <p>Мы</p>
                1
                <p>На планете земля</p>
            </div>
            <div class="main__card">
                2
            </div>
            <div class="main__card">
                3
            </div>
            <div class="main__card">
                4
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

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
    &__card {
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
        }
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            z-index: -1;
        }
    }
}
</style>