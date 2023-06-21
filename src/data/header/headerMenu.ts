export interface HeaderMenuItem {
    name: string;
    link: string;
  }

export const menuItems: HeaderMenuItem[] = [
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

// export const getMenuItems = () => menuItems;