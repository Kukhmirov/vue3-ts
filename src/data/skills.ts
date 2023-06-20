interface Skills {
    title: string,
    count: string,
    description: string,
    link: string,
}

const skillsCards: Skills[] = [
    {
        title: "HTML",
        count: "80%",
        description: "",
        link: "/",
    },
    {
        title: "CSS/препроц...",
        count: "75%",
        description: "",
        link: "/home",
    },
    {
        title: "JS",
        count: "78%",
        description: "",
        link: "/about",
    },
    {
        title: "VUE 2^",
        count: "76%",
        description: "",
        link: "/",
    },
];

export const getSkillsCards = () => skillsCards;