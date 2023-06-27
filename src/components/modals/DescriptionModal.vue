<template>
    <div
        class="description-modal"
        :class="{'open': isOpenModal}"
    >
        <button 
            class="description-modal__close"
            @mouseenter="buttonEnter($event)"
            @mouseleave="buttonLeave"
            @mousemove="buttonMove"
            @click="closeModal"
        />
        <div class="description-modal__content">
            <div
                class="font pro-display xxs xl--500"
                v-html="displayText"
            />
            <img
                class="description-modal__photo"
                src="@/assets/image/img/photo-me.jpg"
                alt="фотография Кухмиров"
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

import { getSkillsData, type SkillDataItem } from "@/data/info";
import { cursorPlugin } from "@/utils/cursor-style";


interface Props {
  isOpenModal: Boolean;
}
const props = defineProps<Props>();

const emit = defineEmits([ "closeModal" ]);

const info = ref<SkillDataItem[]>(getSkillsData());

const displayText = ref("");
const text = info.value[0].information;
const index = ref(0);

const setText = () => {
    displayText.value = text.slice(0, index.value);
    if (index.value < text.length) {
        index.value += 10;
        setTimeout(setText, 40);
    }
};

const closeModal = () => {
    emit("closeModal", false);
};

onMounted(() => {
    setText();
});

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

<style lang="scss">
@import "@/assets/style/colors.scss";

.description-modal {
    background-color: $black;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    max-height: 90vh;
    display: flex;
    padding: 30px 110px 30px 30px;
    z-index: 12;
    transition: height 0.5s ease-in-out;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    &::before {
        content: "";
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    &.open {
        height: fit-content;
    }

    &__close {
        position: absolute;
        top: 0;
        right: 15px;
        width: 40px;
        height: 40px;
        background-color: $white;
        border: none;
        font-size: 40px;
        z-index: 12;
        &::before, ::after {
            content: "\00D7";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: $black;
        }
        &:hover {
            background-color: $sun;
            cursor: none;
        }
    }

    &__content {
        color: $white;
        max-width: 1300px;
        z-index: 12;
    }
    &__link {
        color: $sun; 
    }
    &__skils {
        color: $sun; 
    }
    &__photo {
        height: 300px;
        margin-top: 20px;
        border: solid 8px #fff;
        border-radius: 16px;
    }
}
</style>