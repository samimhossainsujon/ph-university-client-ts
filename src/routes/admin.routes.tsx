import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

const AdminPaths = [
    {
        path: 'dashbord',
        element: <AdminDashbord />
    },
    {
        path: 'create-student',
        element: <CreateStudent />
    },
    {
        path: 'create-admin',
        element: <CreateAdmin />
    },
    {
        path: 'create-faculty',
        element: <CreateFaculty />
    },
]

export default AdminPaths;