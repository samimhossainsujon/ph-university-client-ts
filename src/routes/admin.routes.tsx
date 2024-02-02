import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
    {
        name: 'Dashboard',
        path: "admin/dashboard",
        element: <AdminDashbord />
    },
    {
        name: "User Management",
        children: [
            {
                name: 'Create Admin',
                path: "create-admin",
                element: <CreateAdmin />
            },
            {
                name: 'Create Faculty',
                path: "create-faculty",
                element: <CreateFaculty />
            },
            {
                name: 'Create Student',
                path: "create-student",
                element: <CreateStudent />
            },
        ]
    }
];

