import { NavLink } from "react-router-dom";
import { TSidebarItem, TUsePaths } from "../types";


export const sidebarItemsGenerator = (items:TUsePaths[], role) => {
    const SidebarItems = items.reduce((acc: TSidebarItem[], item) => {
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
                path: item.path
            });
        }
        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map((child) => ({
                    key: child.name,
                    label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
                }))
            });
        }
        return acc;
    }, []);
    return SidebarItems

}