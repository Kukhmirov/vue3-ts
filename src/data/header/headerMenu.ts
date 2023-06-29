import { MODAL_TYPE } from "@/data/constants/modalName";

export interface HeaderMenuItem {
    name: string;
    link: string;
  }

export const menuItems: HeaderMenuItem[] = [
    {
        name: MODAL_TYPE.INFO,
        link: "/",
    },
    {
        name: MODAL_TYPE.WORK,
        link: "/home",
    },
    {
        name: MODAL_TYPE.PET,
        link: "/about",
    },
    {
        name: MODAL_TYPE.CONNECT,
        link: "/",
    },
];

// export const getMenuItems = () => menuItems;