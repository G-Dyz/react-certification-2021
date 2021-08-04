import React from 'react'
import * as AiIcons from 'react-icons/ai'

const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome role="img" />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <AiIcons.AiFillHome role="img" />,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <AiIcons.AiFillHome role="img" />,
            },
        ],
    },
    {
        title: 'Login',
        path: '/login',
        icon: <AiIcons.AiOutlineLogin role="img" />,
    },
    {
        title: 'Secret',
        path: '/secret',
        icon: <AiIcons.AiFillFile role="img" />,
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <AiIcons.AiFillHeart role="img" />,
    },
]

export default SidebarData
