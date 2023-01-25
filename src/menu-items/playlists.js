// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    FireOutlined,
    SafetyOutlined,
    PlayCircleOutlined,
    DesktopOutlined,
    PlusOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FireOutlined,
    SafetyOutlined,
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    PlayCircleOutlined,
    PlusOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const playlists = {
    id: 'playlists',
    title: 'Playlists',
    type: 'group',
    children: [
        {
            id: 'gym-hype',
            title: 'Gym Hype',
            type: 'item',
            url: '/gym-hype',
            icon: icons.FireOutlined
        },
        {
            id: 'meditation',
            title: 'Meditation',
            type: 'item',
            url: '/meditation',
            icon: icons.SafetyOutlined
        },
        {
            id: 'motivation-songs',
            title: 'Motivation Songs',
            type: 'item',
            url: '/motivation-songs',
            icon: icons.PlayCircleOutlined
        },
        {
            id: 'design-practice',
            title: 'Design Practice',
            type: 'item',
            url: '/design-practice',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        },
        {
            id: 'create-new-playlist',
            title: 'Create New Playlist',
            type: 'item',
            url: '/create-new-playlist',
            icon: icons.PlusOutlined,
            breadcrumbs: false
        }
    ]
};

const utilities = {
    id: 'playlists',
    title: 'Playlists',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: '/typography',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/color',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/shadow',
            icon: icons.BarcodeOutlined
        },
        {
            id: 'ant-icons',
            title: 'Ant Icons',
            type: 'item',
            url: '/icons/ant',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        }
    ]
};

export default playlists;
