import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'Project',
        label: 'Project',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'CRM',
        label: 'CRM',
        path: '/CRM',
        icon: <HiOutlineCube />
    },
    {
        key: 'Sales',
        label: 'Sales',
        path: '/Sales',
        icon: <HiOutlineShoppingCart />
    },
    {
        key: 'Crypto',
        label: 'Crypto',
        path: '/Crypto',
        icon: <HiOutlineUsers />
    },
    {
        key: 'KnowledgeBase',
        label: 'Knowledge Base',
        path: '/KnowledgeBase',
        icon: <HiOutlineDocumentText />
    },
    {
        key: 'Account',
        label: 'Account',
        path: '/Account',
        icon: <HiOutlineAnnotation />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'Welcome',
        label: 'Welcome',
        path: '/Welcome',
        icon: <HiOutlineCog />
    },
    {
        key: 'Access Denied',
        label: 'Access Denied',
        path: '/AccessDenied',
        icon: <HiOutlineQuestionMarkCircle />
    }
]
