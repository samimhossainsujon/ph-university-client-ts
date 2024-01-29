import { Layout, Menu, MenuProps } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
    {
        key: 'Dashbord',
        label: <NavLink to='/admin/dashbord'>Dashbord</NavLink>
    },
    {
        key: 'user Management',
        label: 'User Management',
        children: [
            {
                key: 'create Admin',
                label: <NavLink to='/admin/create-admin'>create Admin</NavLink>
            },
            {
                key: 'Create Faculty',
                label: <NavLink to='/admin/create-faculty'>Create Faculty</NavLink>
            },
            {
                key: 'Create Student',
                label: <NavLink to='/admin/create-student'>Create Student</NavLink>
            }
        ]
    }
];

const MainLayout = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;