import { Outlet } from 'react-router-dom';
const AdminLayout = () => {
    return (
        <div>
            <h1>this is Admin Layout Navbar  </h1>
            <Outlet />
        </div>
    );
};

export default AdminLayout;