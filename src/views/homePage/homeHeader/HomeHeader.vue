<template>
    <div class="home-header">
        <div class="home-header__content">sdfsdf</div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.home-header {
    position: relative;
    width: 100%;
    height: 720px;
    background-image: url("@/assets/image/png/homePage/poster-home.png");
    background-repeat: no-repeat;
    background-size: cover;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        background-image:
            linear-gradient(to right,
            rgba(0, 0, 0, 0.7) 30%,
            rgba(0, 0, 0, 0.5) 40%,
            rgba(0, 0, 0, 0) 55%,
            rgba(0, 0, 0, 0.4) 70%);
    }

    &__content {
        padding: 128px 0 0 80px;
    }
}
</style>