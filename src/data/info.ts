/* eslint-disable max-len */
import {
    github,
    telegram,
    phone,
} from "@/assets/image/icons";
export interface SkillDataItem {
    information: string;
}

const skillsData: SkillDataItem[] = [
    {
        information:`<h1 class="font pro-display m m--500">INFO</h1><br /><br />Привет,<br /><br />
        Меня зовут Виталий Кухмиров. Я&nbsp;программист, занимаюсь анимацией, и&nbsp;взаимодействием с&nbsp;
        WEB приложениями.<br /><br /> В&nbsp;настоящее время я&nbsp;живу в&nbsp;на&nbsp;юге России,
        городе Ростов-на-Дону.
        Я&nbsp;работаю в&nbsp;сфере&nbsp;IT начало было положено в 2018 году на&nbsp;
        JAVA (для android), в&nbsp;сфере WEB с 2020 React.<br /><br />В&nbsp;настоящее время я&nbsp;в&nbsp;основном
        погружен в&nbsp;различные веб-технологии (JS, VUE, ThreeJs и&nbsp;т.д.)
        для фронтовой части работы и&nbsp;Node js&nbsp;для серверной. Я&nbsp;всегда в&nbsp;поиске интересного опыта,
        технологий так что не&nbsp;стесняйтесь и&nbsp;обращайтесь <a href="mailto:Kukhmirov85@gmail.com" class="description-modal__link">ко мне</a>,
        если считаете, что я&nbsp;подхожу вам.<br /><br /><h1 class="font pro-display m m--500">SKILS</h1><br /><p class="description-modal__skils">
        HTML - 90%<br />CSS - 83%<br />SCSS - 78%<br />JS - 70%<br />VUE 2 - 80%<br />VUE 3 - 71%<br /> ThreeJs - 45%<br />NODE JS - 37%HTML - 90%<br />CSS - 83%<br />SCSS - 78%<br />JS - 70%<br />VUE 2 - 80%<br />VUE 3 - 71%<br /> ThreeJs - 45%<br />NODE JS - 37%</p>`,
    },
];
export const contactsData = {
    contactText: `<h1 class="font pro-display m m--500">CONTACT</h1><br /><br />
        Если вы хотите работать вместе не стесняйтесь <a href="mailto:Kukhmirov85@gmail.com" class="description-modal__link">связаться со мной</a> или по какой либо другой причине`,
    contactData: [ 
        {
            iconLink: github,
            hrefLink: "https://github.com/Kukhmirov",
        },
        {
            iconLink: phone,
            phone: "+79889483279",
        },
        {
            iconLink: telegram,
            hrefLink: "tg://resolve?domain=@Kukhmi",
        },
    ],
};

export const getSkillsData = () => skillsData;