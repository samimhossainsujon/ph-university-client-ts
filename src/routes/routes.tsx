import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import AdminLayout from "../components/layout/AdminLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashbord from "../pages/admin/AdminDashbord";
import CreateStudent from "../pages/admin/CreateStudent";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ],
    },



    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'dashbord',
                element: <AdminDashbord />
            },
            {
                path: 'create-student',
                element: <CreateStudent />
            },
        ]
    },

    {
        path: '/Login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]);

export default router;