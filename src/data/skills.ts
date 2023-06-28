import { MODAL_TYPE } from "@/data/constants/modalName";

export interface SkillDataItem {
    title: string;
    count: number;
    description: string;
    link: string;
  }

export const skillsData: SkillDataItem [] = [
    {
        title: MODAL_TYPE.INFO,
        count: 90,
        description: "по результатам тестирования w3schools",
        link: "/",
    },
    {
        title: MODAL_TYPE.WORK,
        count: 92,
        description: "по результатам тестирования w3schools",
        link: "/home",
    },
    {
        title: MODAL_TYPE.CONNECT,
        count: 80,
        description: "Оценка основана на собственных наблюдениях",
        link: "/about",
    },
    {
        title: "VUE 2^",
        count: 76,
        description: "Оценка основана на собственных наблюдениях",
        link: "/",
    },
];