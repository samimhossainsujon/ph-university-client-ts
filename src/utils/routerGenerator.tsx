import { TRoute, TUsePaths } from "../types";

export const routerGenerator = (items: TUsePaths[]) => {
    const routes = items.reduce((acc: TRoute[], item) => {
        if (item.path && item.name) {
            acc.push({
                path: item.path,
                element: item.element
            });
        }
        if (item.children) {
            item.children.forEach(child => {
                if (child.path && child.element) {
                    acc.push({
                        path: child.path!,
                        element: child.element
                    });
                }
            });
        }
        return acc
    }, []);
    return routes
}