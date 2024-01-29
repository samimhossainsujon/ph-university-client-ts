import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminPaths from "./admin.routes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },



    {
        path: '/admin',
        element: <App />,
        children: AdminPaths
    },
    {
        path: '/faculty',
        element: <App />,
        children: AdminPaths
    },
    {
        path: '/student',
        element: <App />,
        children: AdminPaths
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