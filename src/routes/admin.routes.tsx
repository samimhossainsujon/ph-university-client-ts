import { ReactNode } from "react";
import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";



type TRoute = {
    path: string,
    element: ReactNode
}


const adminPaths = [

    {
        name: 'Dashbord',
        path: "/admin/dashbord",
        element: <AdminDashbord />
    },
    {
        name: "user Management",
        children: [
            {
                name: 'create-admin',
                path: "/admin/create-admin",
                element: <CreateAdmin />
            },
            {
                name: 'create-faculty',
                path: "/admin/create-faculty",
                element: <CreateFaculty />
            },
            {
                name: 'create-student',
                path: "/admin/create-student",
                element: <CreateStudent />
            },
        ]
    }
]

export const AdminRoutes = adminPaths.reduce((acc :TRoute[], item) => {
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element
        })
    }
    if (item.children) {
        item.children.forEach((child) => {
            acc.push({
                path: child.path,
                element: child.element
            })
        })
    }
    return acc;
}, []);

