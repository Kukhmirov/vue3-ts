export interface SkillDataItem {
    title: string;
    count: string;
    description: string;
    link: string;
  }

export const skillsData: SkillDataItem [] = [
    {
        title: "HTML",
        count: "90%",
        description: "по результатам тестирования w3schools",
        link: "/",
    },
    {
        title: "CSS/препроц...",
        count: "92%",
        description: "по результатам тестирования w3schools",
        link: "/home",
    },
    {
        title: "JS",
        count: "80%",
        description: "Оценка основана на собственных наблюдениях",
        link: "/about",
    },
    {
        title: "VUE 2^",
        count: "76%",
        description: "Оценка основана на собственных наблюдениях",
        link: "/",
    },
];

// export const getSkillsCards = () => skillsData;