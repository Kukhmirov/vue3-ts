interface Menu {
    name: string,
    link: string,
}

const menuItems: Menu[] = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Blog",
        link: "/home",
    },
    {
        name: "About Us",
        link: "/about",
    },
    {
        name: "Contact us",
        link: "/",
    },
];

export const getMenuItems = () => menuItems;