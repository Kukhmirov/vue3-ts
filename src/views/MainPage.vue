<template>
    <the-header @update:isOpen="openInformationModal" />
    <title-page @update:isOpen="openInformationModal" />
    <description-modal
        v-if="isOpenModal"
        :key="typeModal"
        :is-open-modal="isOpenModal"
        :type-modal="typeModal"
        @closeModal="isOpenModal=!isOpenModal"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";

import TheHeader from "@/components/header/TheHeader.vue";
import DescriptionModal from "@/components/modals/DescriptionModal.vue";
import TitlePage from "@/views/titlePage/TitlePage.vue";


const isOpenModal = ref<boolean>(false);
const typeModal = ref<string>("");

const openInformationModal = (openModal: boolean, typeModals: string) => {
    isOpenModal.value = openModal;
    typeModal.value = typeModals;
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight - 100);
    }, 300);
};
</script>