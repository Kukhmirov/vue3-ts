<template>
    <div
        ref="modal"
        class="description-modal"
        :class="{
            'open': isOpenModal,
            'modal-up': isModalUp
        }"
    >   
        <div
            class="description-modal__hide-back"
            :style="{bottom: bottom}"
        />
        <button 
            class="description-modal__close"
            @mouseenter="buttonEnter($event)"
            @mouseleave="buttonLeave"
            @mousemove="buttonMove"
            @click="closeModal"
        />
        <template v-if="showInfo">
            <div class="description-modal__content">
                <div
                    class="font pro-display xxs xl--500"
                    v-html="displayText"
                />
                <div
                    v-if="props.typeModal === MODAL_TYPE.INFO"
                    class="description-modal__photo-box"
                >
                    <Loader v-if="!isImgLoaded" />
                    <img
                        class="description-modal__photo"
                        src="@/assets/image/img/photo-me.jpg"
                        alt="фотография Кухмиров"
                        @load="isImgLoaded = true"
                    >
                </div>
                <div
                    v-else
                    class="description-modal__icons-wrapper"
                >
                    <div
                        v-for="(item) in contactsData.contactData"
                        :key="item.hrefLink"
                        class="description-modal__icon-wrapper"
                    >
                        <a
                            :href="item.phone ? `tel:${item.phone}` : item.hrefLink"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                width="30"
                                height="30"
                            >
                                <image
                                    :xlink:href=item.iconLink
                                    width="30"
                                    height="30"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="showWorkContent">
            <the-slider />
        </template>
        <template v-if="showPet">
            <h1 class="closed-modal">Раздел в разаботке</h1>
        </template>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import Loader from "@/components/loader/DefaultLoader.vue";
import TheSlider from "@/components/utility/slider/TheSlider.vue";
import { MODAL_TYPE } from "@/data/constants/modalName";
import { getSkillsData, type SkillDataItem } from "@/data/info";
import { useDataStore } from "@/stores/getData";
import { cursorPlugin } from "@/utils/cursor-style";


interface Props {
  isOpenModal: Boolean;
  typeModal: String;
}
const props = defineProps<Props>();

const emit = defineEmits([ "closeModal" ]);

const info = ref<SkillDataItem[]>(getSkillsData());
const isImgLoaded = ref(false);
const showInfo = computed(() => {
    return props.typeModal === MODAL_TYPE.INFO || props.typeModal === MODAL_TYPE.CONNECT;
});
const showWorkContent = computed(() => {
    return props.typeModal === MODAL_TYPE.WORK;
});
const showPet = computed(() => {
    return props.typeModal === MODAL_TYPE.PET;
});
const isModalUp = computed(() => {
    return window.innerWidth < 768;
});

const displayText = ref("");
const text = ref<string>("");
const contactsData = ref();


if (props.typeModal === MODAL_TYPE.INFO) {
    text.value = info.value[0].information;
} else {
    const contactData = useDataStore();
    contactsData.value = contactData.getContactsData;
    text.value = contactsData.value.contactText;
}

const index = ref(0);

const setText = () => {
    displayText.value = text.value.slice(0, index.value);
    if (index.value < text.value.length) {
        index.value += 10;
        setTimeout(setText, 40);
    }
};

const closeModal = () => {
    emit("closeModal", false);
};

onMounted(() => {
    setText();
    watchModalHeight();
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

const bottom = ref("");
const modal = ref(null);

const watchModalHeight = () => {
    const modalEl = modal.value as unknown as HTMLElement;
    const observer = new ResizeObserver(() => {
        const height = modalEl.clientHeight;
        bottom.value = `${height}px`;
    });
    observer.observe(modalEl);
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
    padding: 30px;
    z-index: 12;
    transition: height 0.5s ease-in-out;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    &.open {
        height: fit-content;
    }
    &.modal-up {
        position: relative;
        bottom: auto;
        top: 0;
        max-height: 80vh;
        @media (max-width: 767px) {
            top: initial;
            bottom: 0;
        }
    }
    &__hide-back {
        position: fixed;
        top: 0;
        width: 100%;
        @media (max-width: 767px) {
            display: none;
        }
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
    &__photo-box {
        width: 150px;
        height: 300px;
    }
    &__photo {
        height: 100%;
        margin-top: 20px;
        border: solid 8px #fff;
        border-radius: 16px;
    }
    &__icons-wrapper {
        display: flex;
        flex-direction: row;
    }
    &__icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: $sun;
        margin: 20px 20px 0 0;
        a {
            width: 30px;
            height: 30px;
        }
    }
}

.closed-modal {
    color: $white;
    font-size: 34px;
}
</style>