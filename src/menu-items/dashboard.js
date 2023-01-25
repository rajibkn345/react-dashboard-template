// assets
import { DashboardOutlined, HomeOutlined, AppstoreOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    HomeOutlined,
    AppstoreOutlined,
    ReadOutlined,
    UserOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            url: '/home/default',
            icon: icons.HomeOutlined,
            breadcrumbs: false
        },
        {
            id: 'categories',
            title: 'Categories',
            type: 'item',
            url: '/categories',
            icon: icons.AppstoreOutlined,
            breadcrumbs: false
        },
        {
            id: 'library',
            title: 'Library',
            type: 'item',
            url: '/library',
            icon: icons.ReadOutlined,
            breadcrumbs: false
        },
        {
            id: 'connections',
            title: 'Connections',
            type: 'item',
            url: '/connections',
            icon: icons.UserOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
