/* eslint-disable max-len */
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
        imgLink: "src/assets/image/work/illusio.webp",
        imgAlt: "сайт illusio",
        outSideLink: "https://www.allee-sens-noisy.fr/",
    },
    {
        title: "IOTA",
        description: "Работа над сайтом IOTA Industry, фронтовая часть по внесению изменений, сайт представлен на технологии wordpress",
        imgLink: "src/assets/image/work/iota.webp",
        imgAlt: "сайт IOTA Industry",
        outSideLink: "https://iota-group.com/en/blog/article/do-you-have-any-nuclear-project-find-out-how-iota-industry-can-help-you/",
    },
    {
        title: "Фонд целевого капитала",
        description: "Полная переработка фронтовой части сайта на MODX",
        imgLink: "src/assets/image/work/fond.webp",
        imgAlt: "сайт Фонда целевого капитала",
        outSideLink: "https://education.southofrussia.ru/",
    },
    {
        title: "Dog-Sitter",
        description: "Сайт - услуги по присмотру за животными",
        imgLink: "src/assets/image/work/dog-sitter.webp",
        imgAlt: "сайт, услуги по присмотру за домашними животными",
    },
    {
        title: "Банк Центр-Инвест",
        description: "Рекламная акция для банка центр-инвест",
        imgLink: "src/assets/image/work/shell.webp",
        imgAlt: "сайт банк центр инвест",
        outSideLink: "https://www.centrinvest.ru/leto-skidki-cashback",
    },
    {
        title: "Connected kids",
        description: `Видео рессурс для детей. Гибкие настройки возраста, скилов, желаемых результатов.
            Веб сайт Nuxt PWA`,
        imgLink: "src/assets/image/work/kids.webp",
        imgAlt: "сайт развивающей платформы для детей",
    },
    {
        title: "Нотариальная Федеральная Палата",
        description: "Разработка мобильного приложения для Нотариальной Федерально Палаты на базе vue 3.3, ionic",
        imgLink: "src/assets/image/work/notarial.webp",
        imgAlt: "сайт нотариальной федеральной палаты",
    },
];