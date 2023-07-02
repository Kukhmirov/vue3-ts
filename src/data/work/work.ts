/* eslint-disable max-len */
import {
    dogSitter,
    fond,
    illusio,
    iota,
    kids,
    notarial,
    shell,
} from "@/assets/image/image";

export interface workCard {
    title: string;
    description: string;
    imgLink: string;
    imgAlt: string;
    outSideLink?: string;
}

export const workCards: workCard [] = [
    {
        title: "ILLUSIO",
        description: "Группа сайтов по реализации коммерческой/жилой недвижимости в городах Европы, Африки",
        imgLink: illusio,
        imgAlt: "сайт illusio",
        outSideLink: "https://www.allee-sens-noisy.fr/",
    },
    {
        title: "IOTA",
        description: "Работа над сайтом IOTA Industry, фронтовая часть по внесению изменений, сайт представлен на технологии wordpress",
        imgLink: iota,
        imgAlt: "сайт IOTA Industry",
        outSideLink: "https://iota-group.com/en/blog/article/do-you-have-any-nuclear-project-find-out-how-iota-industry-can-help-you/",
    },
    {
        title: "Фонд целевого капитала",
        description: "Полная переработка фронтовой части сайта на MODX",
        imgLink: fond,
        imgAlt: "сайт Фонда целевого капитала",
        outSideLink: "https://education.southofrussia.ru/",
    },
    {
        title: "Dog-Sitter",
        description: "Сайт - услуги по присмотру за животными",
        imgLink: dogSitter,
        imgAlt: "сайт, услуги по присмотру за домашними животными",
    },
    {
        title: "Банк Центр-Инвест",
        description: "Рекламная акция для банка центр-инвест",
        imgLink: shell,
        imgAlt: "сайт банк центр инвест",
        outSideLink: "https://www.centrinvest.ru/leto-skidki-cashback",
    },
    {
        title: "Connected kids",
        description: `Видео рессурс для детей. Гибкие настройки возраста, скилов, желаемых результатов.
            Веб сайт Nuxt PWA`,
        imgLink: kids,
        imgAlt: "сайт развивающей платформы для детей",
    },
    {
        title: "Нотариальная Федеральная Палата",
        description: "Разработка мобильного приложения для Нотариальной Федерально Палаты на базе vue 3.3, ionic",
        imgLink: notarial,
        imgAlt: "сайт нотариальной федеральной палаты",
    },
];