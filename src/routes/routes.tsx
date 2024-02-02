
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Login from "../pages/Login";
import Register from "../pages/Register";
import { routerGenerator } from "../utils/routerGenerator";
import { adminPaths } from "./admin.routes";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },



    {
        path: '/admin',
        element: <App />,
        children: routerGenerator(adminPaths)
    },
    {
        path: '/faculty',
        element: <App />,
        children: routerGenerator(facultyPaths)
    },
    {
        path: '/student',
        element: <App />,
        children: routerGenerator(studentPaths)
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