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
        link: "/blog",
    },
    {
        name: "About Us",
        link: "/about",
    },
    {
        name: "Contact us",
        link: "/contact",
    },
];

export const getMenuItems = () => menuItems;