<template>
    <title-page @update:isOpen="openInformationModal" />
    <!-- <technology-page /> -->
    <description-modal
        v-if="isOpenModal"
        :is-open-modal="isOpenModal"
        :type-modal="typeModal"
        @closeModal="isOpenModal=!isOpenModal"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";

import DescriptionModal from "@/components/modals/DescriptionModal.vue";
// import TechnologyPage from "@/views/technologyPage/TechnologyPage.vue";
import TitlePage from "@/views/titlePage/TitlePage.vue";


const isOpenModal = ref<boolean>(false);
const typeModal = ref<boolean>(false);

const openInformationModal = (openModal: boolean, typeModals: boolean) => {
    isOpenModal.value = openModal;
    typeModal.value = typeModals;
};
</script>